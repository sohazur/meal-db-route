import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./MealDetail.css";

const MealDetail = () => {
  const { mealId } = useParams();
  const temp = {
    meals: [
      {
        strMeal: "",
        strInstructions: "",
        strMealThumb: "",
        strSource: "",
        strYoutube: "",
        strTags: "",
      },
    ],
  };
  const [meal, setMeal] = useState(temp);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [mealId]);
  const {
    strMeal,
    strInstructions,
    strMealThumb,
    strSource,
    strYoutube,
    strTags,
  } = meal.meals[0];
  console.log(meal);
  console.log(meal.meals);
  //   console.log(strMeal);
  return (
    <div>
      <h2>{strMeal}</h2>
      <h4>Tags: {strTags}</h4>
      <img className="img-fluid" src={strMealThumb} alt={strMeal} />
      <p>{strInstructions}</p>
      <br />
      <br />
      <Button variant="primary">
        <a className="link-video" href={strYoutube}>
          Watch Video
        </a>
      </Button>
      <br />
      <br />
      <p>
        <small>
          External Source:
          <a href={strSource} target="/blank">
            {strSource}
          </a>
        </small>
      </p>
    </div>
  );
};

export default MealDetail;
