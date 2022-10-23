import React from "react";
import useCategory from "../store/hooks/useCategory";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/Story.module.css";

const ShowStory = () => {
  const { categories } = useCategory();

  return (
    <>
      <Container>
        {categories.map((category) => (
          <>
            <Row className={`${style.story__card} mb-5`}>
              <div className={style.story__image}>
                <Image
                  src={category.strCategoryThumb}
                  width={300}
                  height={200}
                  fill="true"
                  objectFit="contain"
                />
              </div>
              <div className={style.story__info}>
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

export default ShowStory;
