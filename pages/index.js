import Slider from "./components/Slider";
import { Container, Col, Row, Button } from "react-bootstrap";
import { MealProvider } from "./store/providers/mealProvider";
import ShowRandom from "./components/ShowRandom";
import Link from "next/link";
import Hero from "./components/Hero";
import ShowRecipes from "./components/ShowRecipes";

const Home = () => {
  return (
    <MealProvider>
      <Hero />
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-center mb-5">Especial Recipes</h1>
            <ShowRecipes size={2} quantity={6} />
            <Col lg="12 text-center">
              <Link href="/recipe">
                <Button>View More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </MealProvider>
  );
};
export default Home;
