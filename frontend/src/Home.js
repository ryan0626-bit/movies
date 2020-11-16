import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
export default function Home(props) {
  const { email } = props;

  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("breakfast");

  const addFood = async () => {
      let endpoint = "http://127.0.0.1:5001/dev/addfood";
      let payload = {
          food, email, mealType
      }
      let response = await axios.post(endpoint, payload);
      console.log(response.data)
  };

  return (
    <div>
      <TextField
        placeholder="food name"
        value={food}
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />
      <Select
        value={mealType}
        onChange={(e) => {
          setMealType(e.target.value);
        }}
      >
        <MenuItem value={"breakfast"}>Breakfast</MenuItem>
        <MenuItem value={"lunch"}>Lunch</MenuItem>
        <MenuItem value={"dinner"}>Dinner</MenuItem>
      </Select>
      <Button onClick={addFood}>Add Food Item</Button>
    </div>
  );
}
