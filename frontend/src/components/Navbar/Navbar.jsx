import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  const total = 25000;
  const token = false;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#total" style={{ color: "white" }}>
              🛒 Total: ${total.toLocaleString()}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
