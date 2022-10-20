import React from "react";
import useCategory from "../store/hooks/useCategory";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/Category.module.css";

const ShowRandom = () => {
  const { randomMeals } = useCategory();
  console.log(randomMeals);
  return (
    <>
      <h1 className={`${style["menu-day"]} text-center mt-4`}>
        Especial Menus
      </h1>
      <Container>
        {randomMeals.map((randomMeal) => (
          <>
            <Row
              className={`${style.category__card} mb-5`}
              key={randomMeal.idMeal}
            >
              <div className={style.category__image}>
                <Image
                  src={randomMeal.strMealThumb}
                  width={300}
                  height={200}
                  fill="true"
                  objectFit="contain"
                />
              </div>
              <div className={style.category__info}>
                <h1>{randomMeal.strMeal}</h1>
              </div>
              <video autoPlay loop style={{ width: "500px", height: "500px" }}>
                <source src={randomMeal.strYoutube} />
              </video>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default ShowRandom;
