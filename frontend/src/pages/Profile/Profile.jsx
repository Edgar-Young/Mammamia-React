import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Container className="pt-2 mt-5">
        <h2>Profile</h2>
        <div className="mb-3 d-flex flex-column align-items-center">
          <h6 className="mt-3">
            Email:{" "}
            <span style={{ textDecoration: "underline" }}>
              emulate@test.com
            </span>
          </h6>

          <Link
            to="/"
            className="btn btn-primary mt-3"
            variant="outline-secondary"
          >
            Cerrar Sesión
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Profile;
