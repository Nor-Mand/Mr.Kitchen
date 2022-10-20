import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ShowMeals from "./components/ShowMeals";
import { MealProvider } from "./store/providers/mealProvider";
import { Container, Row } from "react-bootstrap";
import FormData from "./components/FormData";

const Search = () => {
  return (
    <>
      <MealProvider>
        <Container>
          <FormData />
          <ShowMeals />
        </Container>
      </MealProvider>
    </>
  );
};

export default Search;
