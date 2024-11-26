import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowMeals from "./components/ShowMeals";
import BannerSection from "./components/BannerSection";
import Banner from "./images/banner-story.jpg";
import { MealProvider } from "./store/providers/MealProvider";
import useCategory from "./store/hooks/useCategory";
import FormData from "./components/FormData";

const Recipe = () => {
  return (
    <MealProvider>
      <BannerSection banner={Banner} title={"Recipes"} />
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={6} className="mb-5">
              <h1 className="text-center">Choose your Recipes</h1>
              <FormData />
            </Col>
            <Col lg={12}>
              <Row>
                <ShowMeals />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </MealProvider>
  );
};

export default Recipe;
