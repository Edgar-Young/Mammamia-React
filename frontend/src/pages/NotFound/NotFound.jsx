import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "./error_404.jpg";
import "./notFound.css";

const NotFound = () => {
  return (
    <Container className="mt-5 text-center">
      <div>
        <img src={error} alt="Not Found" className="error-img" />
      </div>
      <div>
        <Link to="/" className="text-decoration-none ms-3 link-lg">
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
