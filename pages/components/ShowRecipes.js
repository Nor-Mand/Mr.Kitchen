import React, { useState } from "react";
import useCategory from "../store/hooks/useCategory";
import { Card, Button, Modal } from "react-bootstrap";
import Link from "next/link";
import style from "../../styles/ShowRecipes.module.css";
import RecipeId from "./RecipeId";

const ShowRecipes = ({ quantity }) => {
  const { allMeals, getMealsById } = useCategory();
  
  const selectRecipeId  = (id) =>{
    getMealsById(id)
  }

  return (
    <>
      {allMeals
        .slice(0, quantity)
        .map(({ idMeal, strMeal, strMealThumb, strArea }) => (
          <div className="col-lg-4" key={idMeal}>
            <Card className={`mb-4 border-0, ${style["show-recipes__card"]}`}>
              <Link
                href={`/meals/${idMeal}-${strMeal
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <a onClick={() => selectRecipeId(idMeal)}>
                  <div className={style["show-recipes__image"]}>
                    <Card.Img variant="top" src={strMealThumb} />
                  </div>
                  <Card.Body className={style["show-recipes__body"]}>
                    <Card.Title style={{ fontSize: "4rem" }}>
                      {strMeal}
                    </Card.Title>
                    <p style={{ fontSize: "2.5rem" }}>{strArea}</p>
                  <Button >See Recipe</Button>
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
