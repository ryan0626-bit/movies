import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";
import axios from "axios";

const EditMealType = (props) => {
  const { dateEntry, currentMealType, email, getMeals } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newMealType, setNewMealType] = useState("");

  const handleSaveChanges = async () => {
    let payload = {
      mealType: newMealType,
      dateEntry,
      email,
    };
    setIsEditing(false);
    let endpoint = `http://127.0.0.1:5001/dev/updatemealtype`;
    let response = await axios.put(endpoint, payload);
    await getMeals();
  };

  useEffect(() => {
    console.log("Seetting mealtype", currentMealType);
    setNewMealType(currentMealType);
  }, [currentMealType]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditMealType = (e) => {
    setNewMealType(e.target.value);
  };
  return isEditing ? (
    <>
      <IconButton onClick={handleSaveChanges}>
        <DoneIcon />
      </IconButton>
      <TextField onChange={handleEditMealType} value={newMealType} />
    </>
  ) : (
    <>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      {newMealType}
    </>
  );
};

export default EditMealType;
