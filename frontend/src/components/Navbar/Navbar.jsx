import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { UserContex } from "../../context/UserContext";

const Menu = () => {
  const { totalPrice } = useContext(CartContext);
  const { token, logout } = useContext(UserContex);

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
                  to="/profile"
                  className="text-decoration-none ms-3 text-white"
                >
                  🧑🏽‍💼 Profile
                </Link>
                <button className="btn btn-outline-primary" onClick={logout}>
                  🔒 Logout
                </button>
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
