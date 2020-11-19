import { response } from "./helpers";
import { FoodModel, UserModel } from "./models";

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

export const addFood = async ({ body, queryStringParameters }) => {
  // WHEN body first comes in it will be a string  in order to convert that string into an object you haave to do JSON.parse(body)
  let { email, mealType, food } = JSON.parse(body);
  let newFood = new FoodModel({
    email,
    dateEntry: Date.now().toString(),
    mealType,
    food,
  });
  await newFood.save();

  return response({ success: true, newFood });
};

export const getMeals = async ({ body, queryStringParameters }) => {
  const { email } = queryStringParameters;
  let foods = await FoodModel.query({ email }).exec();
  return response({ success: true, foods });
};

export const deleteMeals = async ({ body, queryStringParameters }) => {
  const { email, dateEntry } = queryStringParameters;
  await FoodModel.delete({ email, dateEntry });
  return response({ success: true });
};

export const updateMealType = async ({ body, queryStringParameters }) => {
  const { dateEntry, mealType, email } = JSON.parse(body);
  await FoodModel.update({ email, dateEntry }, { mealType });
  return response({ success: true });
};
export const food = async ({ body, queryStringParameters }) => {
  const { dateEntry, food, email } = JSON.parse(body);
  await FoodModel.update({ email, dateEntry }, { food });
  return response({ success: true });
};
//await FoodModel.update({email, dateEntry},{food})
//await FoodModel.update({email, dateEntry}, {mealType})

//REST - post, functionName = createMovie, path: /createmovie
// serverless offline start --host 127.0.0.1 --http-port 5001
