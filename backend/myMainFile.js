import { response } from "./helpers";
import { v4 as uuid } from "uuid";
import dynamoose from "dynamoose";

const FoodSchema = new dynamoose.Schema({
  email: {
    hashKey: true,
    type: String,
    default: () => uuid(),
  },
  dateEntry: {
    rangeKey: true,
    type: String,
    default: () => Date.now().toString(),
  },
  food: String,
  mealType: String,
});

const MovieSchema = new dynamoose.Schema({
  id: {
    hashKey: true,
    type: String,
    default: () => uuid(),
  },
  username: String,
  movie: String,
});
const UserSchema = new dynamoose.Schema({
  email: {
    hashKey: true,
    type: String,
  },
  password: String,
});

const MovieModel = dynamoose.model("movieapp-movies", MovieSchema);

const UserModel = dynamoose.model("movieapp-users", UserSchema);

export const signUp = async ({ body, queryStringParameters }) => {
  let payload = JSON.parse(body);
  let user = await UserModel.get({ email: payload.email }); // user.email, user.password if it exists
  if (user) {
    //the user already exists do not create a new one
    return response({ success: false, user, message: "user already exists" });
  } else {
    //the user === null and therefore does not exits so we need to create that user in our tables
    let newUser = new UserModel({
      email: payload.email,
      password: payload.password,
    });
    await newUser.save();
    return response({ newUser, success: true });
  }
};

export const signIn = async ({ body, queryStringParameters }) => {
  let payload = JSON.parse(body);
  let user = await UserModel.get({ email: payload.email });
  if (!user) {
    return response({ success: false, message: "user does not exist" });
  } else if (user.password === payload.password) {
    return response({ success: true });
  } else {
    return response({ success: false, messaage: "incorrect password" });
  }
};

export const createMovie = async ({ body, queryStringParameters }) => {
  // WHEN body first comes in it will be a string  in order to convert that string into an object you haave to do JSON.parse(body)
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
