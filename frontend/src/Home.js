import React from "react";
import DisplayMeals from "./home-components/DisplayMeals";

export default function Home(props) {
  const { email } = props;

  return (
    <div>
      
      <DisplayMeals email={email} />
    </div>
  );
}
