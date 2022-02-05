import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">
        <Button variant="primary">Home</Button>
      </NavLink>
      <NavLink to="/meal/52771">
        <Button variant="primary">Best Meal</Button>
      </NavLink>
    </div>
  );
};

export default Header;
