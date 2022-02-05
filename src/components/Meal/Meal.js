import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <Card className="m-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{strInstructions.substring(0, 300)}</Card.Text>
        <Link to={`/meal/${idMeal}`}>
          <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Meal;
