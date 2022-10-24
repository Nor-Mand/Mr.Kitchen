import { Container, Row } from "react-bootstrap";
import { MealProvider } from "./store/providers/mealProvider";
import Hero from "./components/Hero";
import ShowRecipes from "./components/ShowRecipes";

const Home = () => {
  return (
    <MealProvider>
      <Hero />
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-center mb-5 second-font">Especial Recipes</h1>
            <ShowRecipes size={4} quantity={6} />
          </Row>
        </Container>
      </section>
    </MealProvider>
  );
};
export default Home;
