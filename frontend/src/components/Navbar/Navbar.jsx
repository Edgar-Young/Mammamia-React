import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Menu = () => {
  const { totalPrice } = useContext(CartContext);
  const token = false;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Home">Pizzeria Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none ms-3 text-white">
              🍕 Home
            </Link>
            {token ? (
              <>
                <Link
                  to="/logout"
                  className="text-decoration-none ms-3 text-white"
                >
                  🔒 Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-decoration-none ms-3 text-white"
                >
                  🔐 Login
                </Link>
                <Link
                  to="/register"
                  className="text-decoration-none ms-3 text-white"
                >
                  🔐 Register
                </Link>
                <Link
                  to="/profile"
                  className="text-decoration-none ms-3 text-white"
                >
                  🔓 Profile
                </Link>
              </>
            )}
          </Nav>
          <Nav className="ml-auto">
            <Link to="/cart" className="text-decoration-none ms-3 text-white">
              🛒 Total: ${totalPrice.toLocaleString()}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
