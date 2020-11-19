import { v4 as uuid } from "uuid";
import dynamoose from "dynamoose";

const FoodSchema = new dynamoose.Schema({
  email: {
    hashKey: true,
    required: true,
    type: String,
  },
  dateEntry: {
    rangeKey: true,
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  mealType: { type: String, required: true },
});

const UserSchema = new dynamoose.Schema({
  email: {
    hashKey: true,
    type: String,
  },
  password: String,
});

export const FoodModel = dynamoose.model("foodapp-food", FoodSchema);

export const UserModel = dynamoose.model("foodapp-users", UserSchema);
