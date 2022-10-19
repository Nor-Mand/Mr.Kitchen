import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";
import { Container, Row } from "react-bootstrap";
import ShowMeals from "./components/ShowMeals";
import { MealProvider } from "./store/providers/mealProvider";
import FormData from "./components/FormData";

const Home = () => {
  return (
    <MealProvider>
      <Container>
        <h1>Welcome to Mr. Kitchen API</h1>
        <Slider />
        <FormData />
        <ShowMeals />
      </Container>
    </MealProvider>
  );
};
export default Home;
