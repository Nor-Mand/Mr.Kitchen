import React from "react";
import Image from "next/image";
import useCategory from "../store/hooks/useCategory";
import { Col, Card } from "react-bootstrap";

const ShowRecipes = ({ size, quantity }) => {
  const { allMeals } = useCategory();
  console.log(typeof quantity);
  return (
    <>
      {allMeals
        .slice(0, quantity)
        .map(({ strMeal, strMealThumb, strCategory, strArea }) => (
          <>
            <Col lg={size}>
              <Card className="mb-4 border-0">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    {strMeal}
                  </Card.Title>
                  <p>Categorie: {strCategory}</p>
                  <p>Country: {strArea}</p>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
    </>
  );
};

export default ShowRecipes;
