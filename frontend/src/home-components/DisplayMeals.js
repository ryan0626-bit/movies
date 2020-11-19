import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import axios from "axios";
import moment from "moment";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import EditFood from "./EditFood";
import EditMealType from "./EditMealType";
import AddFood from "./AddFood";
import {API} from '../config'

const DisplayMeals = (props) => {
  const { email } = props;
  const [foods, setFoods] = useState([]);

  const getMeals = async () => {
    let endpoint = `${API}/getmeals?email=${email}`;
    let response = await axios.get(endpoint);
    setFoods(response.data.foods);
  };

  const deleteMeal = async (dateEntry) => {
    let endpoint = `${API}/deletemeals?email=${email}&dateEntry=${dateEntry}`;
    let response = await axios.delete(endpoint);
    await getMeals();
  };

  useEffect(() => {
    getMeals();
  }, []);

  const columns = [
    {
      name: "dateEntry",
      label: "Date",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => moment(parseInt(data)).format("MM-DD-YY"),
      },
    },
    {
      name: "dateEntry",
      label: "Time",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => {
          return moment(parseInt(data)).format("hh:mm");
        },
      },
    },
    {
      name: "food",
      label: "Food",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (food, { rowData }) => {
          let dateEntry = rowData[0];
          return (
            <EditFood
              email={email}
              dateEntry={dateEntry}
              getMeals={getMeals}
              currentFood={food}
            />
          );
        },
      },
    },

    {
      name: "mealType",
      label: "Meal Type",
      options: {
        customBodyRender: (mealType, { rowData }) => {
          let dateEntry = rowData[0];
          return (
            <EditMealType
              getMeals={getMeals}
              email={email}
              dateEntry={dateEntry}
              currentMealType={mealType}
            />
          );
        },
        filter: true,
        sort: true,
      },
    },
    {
      label: "Remove",
      name: "dateEntry",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (dateEntry) => (
          <IconButton
            onClick={() => {
              deleteMeal(dateEntry);
            }}
          >
            <Delete />
          </IconButton>
        ),
      },
    },
  ];

  const options = {
    selectableRows: false,
  };

  return (
    <>
      <AddFood email={email} getMeals={getMeals} />
      <MUIDataTable
        title={"Foods List"}
        data={foods}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default DisplayMeals;
