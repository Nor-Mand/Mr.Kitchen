import React from "react";
import { Col, Card } from "react-bootstrap";
import styles from "../../styles/CardFood.module.css";

const CardFood = ({ meal }) => {
  return (
    <Col md={4} lg={3}>
      <Card className="mb-4 border-0">
        <Card.Img
          variant="top"
          src={meal.strMealThumb}
          className={styles.card__img}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{meal.strMeal}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardFood;
