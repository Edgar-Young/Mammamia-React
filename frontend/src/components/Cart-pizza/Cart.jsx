import React, { useState } from "react";
import { pizzaCart } from "../Card-pizza/pizzas";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incremetar = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const disminuir = (id) => {
    const updatedCart = cart
      .map((pizza) => {
        if (pizza.id === id && pizza.count > 0) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, pizza) => {
    return total + pizza.price * pizza.count;
  }, 0);

  return (
    <Container className="mt-4 py-5">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <Row className="justify-content-md-center">
        {cart.map((pizza) => (
          <Col md={2} lg={2} key={pizza.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>Precio: ${pizza.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="outline-danger"
                    onClick={() => disminuir(pizza.id)}
                  >
                    -
                  </Button>
                  <span>{pizza.count}</span>
                  <Button
                    variant="outline-success"
                    onClick={() => incremetar(pizza.id)}
                  >
                    +
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <h3>Total a Pagar: $ {totalPrice.toLocaleString("es-CL")}</h3>
          <Button variant="success" className="mt-3">
            Pagar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
