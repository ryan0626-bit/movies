import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import Form from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {API} from '../config'
import axios from "axios";
export default function Home(props) {
  const { email, getMeals } = props;

  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("breakfast");

  const addFood = async () => {
    let endpoint = `${API}/addfood`;
    let payload = {
      food,
      email,
      mealType,
    };
    let response = await axios.post(endpoint, payload);
    await getMeals();
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Form style={{ textAlign: "center" }}>
        <OutlinedInput
          placeholder="Add Food Entry"
          onChange={(e) => {
            setFood(e.target.value);
          }}
        />
        <Select
          variant="outlined"
          value={mealType}
          onChange={(e) => {
            setMealType(e.target.value);
          }}
        >
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"lunch"}>Lunch</MenuItem>
          <MenuItem value={"dinner"}>Dinner</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={addFood}>
          Add Food Item
        </Button>
      </Form>
    </div>
  );
}
