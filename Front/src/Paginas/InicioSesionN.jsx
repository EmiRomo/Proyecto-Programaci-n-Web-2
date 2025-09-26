import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../InicioSesion.css"; 

function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");

  const redirect = useNavigate();

  localStorage.clear();
  localStorage.removeItem("usuario");

  const login = async (event) => {
    event.preventDefault();

    try {
      const respServer = await axios.post("http://localhost:3001/login", {
        email: correo,
        pass: contra,
      });

      if (respServer.data.msg === "encontrado") {
        localStorage.setItem("usuario", respServer.data.info);
        redirect("/Principal");
      } else if (respServer.data.msg === "noEncontrado") {
        alert("Usuario no encontrado. Verifique sus datos");
      }
    } catch (error) {
      console.log(error);
      alert("Error al procesar el login");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="login-header"></header>

      {/* Logo fuera del formulario */}
      <div className="logo">
        <img src="/imagenes/logo.jpeg" alt="Logo" />
      </div>

      <div className="container-login">
        {/* Imagen a la izquierda */}
        <div className="image-section"></div>

        {/* Formulario a la derecha */}
        <div className="form-section">
          <form className="form-box" onSubmit={login}>
            <h2>¡Bienvenido!</h2>

            <label htmlFor="correo">Usuario:</label>
            <input
              type="text"
              id="correo"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={contra}
              onChange={(e) => setContra(e.target.value)}
            />

            <button type="submit" className="btn-submit">
              Entrar
            </button>

            <div className="forgot-password">
              <Link to="/RegistroN">¿No estas registrado?</Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default InicioSesion;
