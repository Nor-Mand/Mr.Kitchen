import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MealProvider } from "./store/providers/mealProvider";
import ShowStory from "./components/ShowStory";
import BannerSection from "./components/BannerSection";
import Banner from "./images/banner-story.jpg";

const Story = () => {
  return (
    <MealProvider>
      <BannerSection banner={Banner} title={"Story"} />
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={9}>
              <ShowStory />
            </Col>
          </Row>
        </Container>
      </section>
    </MealProvider>
  );
};

export default Story;
