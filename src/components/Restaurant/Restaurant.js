import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  console.log(meals);
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          onChange={handleChange}
          placeholder="Search Food"
          aria-label="Search Food"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <Container>
        <Row>
          {meals.map((meal) => (
            <Col
              className="g-4"
              xs={12}
              md={6}
              lg={4}
              key={parseInt(meal.idMeal) * Math.random(10)}
            >
              <Meal meal={meal}></Meal>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
