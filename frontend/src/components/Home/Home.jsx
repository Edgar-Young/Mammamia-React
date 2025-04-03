import Header from "../Header/Header";
import CardPizza from "../Card-pizza/CardPizza";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const Home = () => {
  const [apipizzas, setApiPizzas] = useState([]);

  //llamar a la API
  const getApiPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    setApiPizzas(data);
  };

  useEffect(() => {
    getApiPizzas();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="py-5">
          {apipizzas?.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                img={pizza.img}
                desc={pizza.desc}
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
