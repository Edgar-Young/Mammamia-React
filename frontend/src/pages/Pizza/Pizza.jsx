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
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  console.log(useParams());

  useEffect(() => {
    getApiPizzas();
  }, [id]);

  //llamar a la API
  const getApiPizzas = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("No se pudo establecer conexión con el servidor", error);
    }
  };

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={6}>
            <Image src={info.img} rounded />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="capitalize">{info.name}</Card.Title>
                <Card.Text>{info.desc}</Card.Text>
                <Card.Text>
                  Precio: $ {info.price?.toLocaleString("es-CL")}
                </Card.Text>
                <ListGroup
                  className="capitalize"
                  variant="flush"
                  as="ol"
                  numbered
                >
                  {info.ingredients?.map((ingrediente, index) => (
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
