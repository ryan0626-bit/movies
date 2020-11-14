import { response } from "./helpers";
import { getEmployeeDb, getEmployeesDb } from "./dbMethods";

export const hello = async ({ body, queryStringParameters }) => {
  console.log("you have hit the lambda");
  let data = { ryan: "understands code" };
  return response(data);
};

export const getEmployee = async ({ body, queryStringParameters }) => {
  const id = queryStringParameters.id;
  let employee = getEmployeeDb(id);
  return response(employee);
};

export const createMovie = async ({ body, queryStringParameters }) => {
  console.log(body);
  // WHEN body first comes in it will be a string
  // in order to convert that string into an object
  // you haave to do JSON.parse(body)
  let payload = JSON.parse(body);

  return response({ greatJob: true, payload });
};

export const getMovie = async ({ body, queryStringParameters }) => {
  console.log(queryStringParameters, body);
  return response({ greatJob: true, queryStringParameters, body });
}

  //REST - post, functionName = createMovie, path: /createmovie
// serverless offline start --host 127.0.0.1 --http-port 5001