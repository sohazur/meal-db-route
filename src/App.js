import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MealDetail from "./components/MealDetail/MealDetail";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route exact path="/home" element={<Restaurant></Restaurant>} />
          <Route
            exact
            path="/meal/:mealId"
            element={<MealDetail></MealDetail>}
          />
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
