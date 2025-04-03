import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card-pizza.css";
import { ListGroupItem } from "react-bootstrap";

const CardPizza = ({ name, img, ingredients, price }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text></Card.Text>
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
        <Button class="btn1">Ver mas 👀</Button>
        <Button class="btn2">Agregar 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
