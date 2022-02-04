import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MealDetail = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [mealId]);

  return (
    <div>
      <h2>{mealId}</h2>
    </div>
  );
};

export default MealDetail;
