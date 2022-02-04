import React from "react";

const Meal = (props) => {
  const { idMeal, strMeal, strInstructions } = props.meal;
  return (
    <div>
      <h1>{strMeal}</h1>
      <h1>{strInstructions}</h1>
    </div>
  );
};

export default Meal;
