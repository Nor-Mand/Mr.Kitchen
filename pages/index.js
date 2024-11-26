import { Container, Row } from "react-bootstrap";
import { MealProvider } from "./store/providers/MealProvider";
import Hero from "./components/Hero";
import ShowRecipes from "./components/ShowRecipes";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mr. Kitchen - API Project</title>
      </Head>
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
    </>
  );
};
export default Home;
