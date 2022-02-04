import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route exact path="/home" element={<Restaurant></Restaurant>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
