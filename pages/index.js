import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";
import { Container, Row } from "react-bootstrap";

import { MealProvider } from "./store/providers/mealProvider";
import ShowRandom from "./components/ShowRandom";

const Home = () => {
  return (
    <MealProvider>
      <Container>
        {/* <h1>Welcome to Mr. Kitchen API</h1> */}
        <Slider />
        <ShowRandom />
      </Container>
    </MealProvider>
  );
};
export default Home;
