import { useState } from "react";
import axios from "axios";
import "../Registro.css";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipo, setTipo] = useState("");

  const sendDatos = async (e) => {
    e.preventDefault();

    const frmData = new FormData();
    frmData.append("name", nombre);
    frmData.append("email", correo);
    frmData.append("pass", contra);
    frmData.append("address", direccion);
    frmData.append("tipo", tipo);

    try {
      const respuesta = await axios.post(
        "http://localhost:3001/registro",
        frmData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (respuesta.data.msg === "OK") {
        alert("Usuario registrado");
      } else if (respuesta.data.msg === "ErrBD") {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.log(error);
      alert("Error en petición al servidor");
    }
  };

  return (
    <div className="registro-page">
      <header></header>

      <div className="logoR">
        <img src="/imagenes/logo.jpeg" alt="Logo" />
      </div>

      <div className="registro-container">
        {/* Formulario */}
        <div className="Rform-section">
          <div className="Rform-box">
            <h2>Registro</h2>
            <form onSubmit={sendDatos}>
              <label htmlFor="username">Nombre usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setNombre(e.target.value)}
              />

              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setCorreo(e.target.value)}
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setContra(e.target.value)}
              />

              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={(e) => setDireccion(e.target.value)}
              />

              <label>Tipo de usuario:</label>
              <div className="user-type">
                <button
                  type="button"
                  className={tipo === "Cliente" ? "active" : ""}
                  onClick={() => setTipo("Cliente")}
                >
                  Cliente
                </button>
                <button
                  type="button"
                  className={tipo === "Administrador" ? "active" : ""}
                  onClick={() => setTipo("Administrador")}
                >
                  Administrador
                </button>
              </div>

              <button type="submit" className="btn-submit">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="Registro-image"></div>
      </div>
    </div>
  );
}
