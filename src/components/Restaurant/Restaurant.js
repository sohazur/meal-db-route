import React, { useEffect, useState } from "react";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
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
    </div>
  );
};

export default Restaurant;
