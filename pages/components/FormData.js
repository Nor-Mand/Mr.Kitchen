import React, { useState } from "react";

// Import Bootstrap components
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../store/hooks/useCategory";

const FormData = () => {
  const { categories } = useCategory();

  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  // const [alert, setAlert] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.values(busqueda).includes("")) {
  //     setAlerta("Todos los campos son obligatorios");
  //     return;
  //   }
  //   setAlerta("");
  //   consultarBebida(busqueda);
  // };

  return (
    <Form>
      {/* {alerta && <Alert variant="danger text-center">{alerta}</Alert>} */}
      <Row>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Control
              type="text"
              placeholder="Search for recipes..."
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mt-3">
            <Form.Select>
              <option>- Choose Category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group className="mt-3">
            <Button
              variant="primary"
              className="text-uppercase w-100"
              type="submit"
            >
              Search
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default FormData;
