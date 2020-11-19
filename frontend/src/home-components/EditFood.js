import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Create";
import DoneIcon from "@material-ui/icons/Done";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditFood = (props) => {
  const { email, dateEntry, currentFood, getMeals } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [food, setFood] = useState("");

  const saveChanges = async () => {
    let payload = {
      food,
      dateEntry,
      email,
    };
    setIsEditing(false);
    let endpoint = `http://127.0.0.1:5001/dev/editfood`;
    let response = await axios.put(endpoint, payload);
    await getMeals();
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleEditFood = (e) => {
    setFood(e.target.value);
  };

  useEffect(() => {
    setFood(currentFood);
  }, [currentFood]);

  return isEditing ? (
    <>
      <IconButton onClick={saveChanges}>
        <DoneIcon />
      </IconButton>
      <TextField onChange={handleEditFood} value={food} />
    </>
  ) : (
    <>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      {food}
    </>
  );
};

export default EditFood;
