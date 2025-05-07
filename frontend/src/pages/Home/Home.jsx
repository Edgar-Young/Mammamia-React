import Header from "../../components/Header/Header";
import CardPizza from "../../components/Card-pizza/CardPizza";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getApiPizzas();
  }, []);

  //llamar a la API
  const getApiPizzas = async () => {
    const url = `http://localhost:5000/api/pizzas`;
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
      <Header />
      <Container>
        <Row className="py-5">
          {info.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
