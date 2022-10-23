import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowRecipes from "./components/ShowRecipes";
import BannerSection from "./components/BannerSection";
import Banner from "./images/banner-story.jpg";
import { MealProvider } from "./store/providers/mealProvider";
import useCategory from "./store/hooks/useCategory";
import FormData from "./components/FormData";

const Recipe = () => {
  return (
    <MealProvider>
      <BannerSection banner={Banner} title={"Recipes"} />
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={3}>
              <h1>Categories</h1>
              <FormData />
            </Col>
            <Col lg={9}>
              <Row>
                <ShowRecipes size={4} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </MealProvider>
  );
};

export default Recipe;
