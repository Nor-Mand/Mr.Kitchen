import React from "react";
import useCategory from "../store/hooks/useCategory";
import { Col, Card } from "react-bootstrap";
import Link from "next/link";
import style from "../../styles/ShowRecipes.module.css";

const ShowRecipes = ({ size, quantity }) => {
  const { allMeals } = useCategory();
  return (
    <>
      {allMeals
        .slice(0, quantity)
        .map(({ idMeal, strMeal, strMealThumb, strArea }) => (
          <div className="col-lg-4" key={idMeal}>
            <Card className={`mb-4 border-0, ${style["show-recipes__card"]}`}>
              <Link href={`/meals/${strMeal.toLowerCase().replace(/ /g, "-")}`}>
                <a>
                  <div className={style["show-recipes__image"]}>
                    <Card.Img variant="top" src={strMealThumb} />
                  </div>
                  <Card.Body className={style["show-recipes__body"]}>
                    <Card.Title style={{ fontSize: "4rem" }}>
                      {strMeal}
                    </Card.Title>
                    <p style={{ fontSize: "2.5rem" }}>{strArea}</p>
                  </Card.Body>
                </a>
              </Link>
            </Card>
          </div>
        ))}
    </>
  );
};

export default ShowRecipes;
