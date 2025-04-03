import { useState } from "react";
import { Container } from "react-bootstrap";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    // Validaciones
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setSuccessMessage("Datos enviados correctamente!");

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Container>
        <h2>LOGIN</h2>
        <form className="formulario py-5" onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error} </div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              placeholder="ejemplo@email.com"
              value={email}
              onChange={handleEmailChange}
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              name="pass"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Enviar
          </button>
        </form>
      </Container>
    </>
  );
};

export default Loginpage;
