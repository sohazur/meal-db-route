import React from "react";
import { Button, Card } from "react-bootstrap";

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{strInstructions.substring(0, 300)}</Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Meal;
