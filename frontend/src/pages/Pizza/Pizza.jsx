import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  ListGroup,
  Col,
  Row,
  Image,
} from "react-bootstrap";

const Pizza = () => {
  const [apipizzas, setApiPizzas] = useState({});

  //llamar a la API
  const getApiPizzas = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      if (!res.ok) {
        throw new Error("No se pudo obtener la pizza.");
      }
      const data = await res.json();
      setApiPizzas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiPizzas();
  }, []);

  const { name, desc, price, ingredients, img } = apipizzas;

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={6}>
            <Image src={img} rounded />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="capitalize">{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>
                  Precio: $ {price?.toLocaleString("es-CL")}
                </Card.Text>
                <ListGroup
                  className="capitalize"
                  variant="flush"
                  as="ol"
                  numbered
                >
                  {ingredients?.map((ingrediente, index) => (
                    <ListGroup.Item key={index}>
                      🍕 {ingrediente}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="d-flex justify-content-end mt-3">
                  <Button variant="dark">Añadir al carrito 🛒</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pizza;
