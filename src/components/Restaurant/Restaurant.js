import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  console.log(meals);
  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <input onChange={handleChange} type="search" name="" id="" />
      <div>
        {meals.map((meal) => (
          <Meal
            key={parseInt(meal.idMeal) * Math.random(10)}
            meal={meal}
          ></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
