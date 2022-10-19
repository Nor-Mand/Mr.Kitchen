import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import mealOne from "../images/meal1.jpg";
import mealTwo from "../images/meal2.jpg";
import mealThree from "../images/meal3.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="rounded"
          fill="true"
          objectFit="cover"
          sizes="100vw"
          height={200}
          src={mealOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="rounded"
          fill="true"
          objectFit="cover"
          sizes="100vw"
          height={200}
          src={mealTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="rounded"
          fill="true"
          objectFit="cover"
          sizes="100vw"
          height={200}
          src={mealThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
