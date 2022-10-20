import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row } from "react-bootstrap";

import { MealProvider } from "./store/providers/mealProvider";

import ShowCategories from "./components/ShowCategories";

const Categories = () => {
  return (
    <MealProvider>
      <Container>
        <ShowCategories />
      </Container>
    </MealProvider>
  );
};
export default Categories;
