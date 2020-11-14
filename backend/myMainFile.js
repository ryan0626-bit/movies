import { response } from "./helpers";
import { v4 as uuid } from "uuid";
import dynamoose from "dynamoose";

const MovieSchema = new dynamoose.Schema({
  id: {
    hashKey: true,
    type: String,
    default: () => uuid(),
  },
  username: String,
  movie: String,
});

const MovieModel = dynamoose.model("movies", MovieSchema);

export const hello = async ({ body, queryStringParameters }) => {
  console.log("you have hit the lambda");
  let data = { ryan: "understands code" };
  return response(data);
};

export const createMovie = async ({ body, queryStringParameters }) => {
  // WHEN body first comes in it will be a string
  // in order to convert that string into an object
  // you haave to do JSON.parse(body)
  let payload = JSON.parse(body);
  let newMovie = new MovieModel({
    username: payload.username,
    movie: payload.movie,
  });
  await newMovie.save();

  return response({ greatJob: true, newMovie });
};

export const getMovie = async ({ body, queryStringParameters }) => {
  console.log(queryStringParameters, body);
  return response({ greatJob: true, queryStringParameters, body });
};

//REST - post, functionName = createMovie, path: /createmovie
// serverless offline start --host 127.0.0.1 --http-port 5001
