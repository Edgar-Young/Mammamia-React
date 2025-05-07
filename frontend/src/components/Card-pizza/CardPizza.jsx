import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card-pizza.css";
import { ListGroupItem } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CardPizza = ({ name, img, ingredients, price, id }) => {
  const { addToCart } = useContext(CartContext);
  const pizza = { name, ingredients, price, img, id };
  const navigate = useNavigate();
  const verPizza = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <p className="text-muted text-center">Ingredientes</p>
        <ListGroup className="text-center">
          {ingredients.map((i) => (
            <ListGroupItem key={i}>🍕{i}</ListGroupItem>
          ))}
        </ListGroup>
        <ListGroup.Item className="text-center">Precio: {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-buttons">
        <Button variant="outline-info" onClick={verPizza}>
          Ver mas 👀
        </Button>
        <Button variant="primary" onClick={() => addToCart(pizza)}>
          Agregar 🛒
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
