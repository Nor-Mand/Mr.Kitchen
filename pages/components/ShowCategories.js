import React from "react";
import useCategory from "../store/hooks/useCategory";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/Category.module.css";
const ShowCategories = () => {
  const { categories } = useCategory();

  return (
    <>
      <h1>Discover Our Categories</h1>
      <Container>
        {categories.map((category) => (
          <>
            <Row className={`${style.category__card} mb-5`}>
              <div className={style.category__image}>
                <Image
                  src={category.strCategoryThumb}
                  width={300}
                  height={200}
                  fill="true"
                  objectFit="contain"
                />
              </div>
              <div className={style.category__info}>
                <h1>{category.strCategory}</h1>
                <p>{category.strCategoryDescription}</p>
              </div>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default ShowCategories;
