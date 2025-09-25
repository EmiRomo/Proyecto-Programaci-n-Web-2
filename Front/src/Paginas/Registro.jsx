import { useState } from "react";
import { Footer, Navbar } from "../Componentes/NavFoot";
import axios from "axios"; 
export default function Registro() {

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [contra, setContra] = useState("");
const [archivo, setArchivo] = useState(null);

const sendDatos = async (e) => {
e.preventDefault();
//FormData

const frmData = new FormData();
frmData.append("name", nombre);
frmData.append("email", correo);
frmData.append("pass", contra);
frmData.append("file", archivo);

try {
  const respuesta = await axios.post("http://localhost:3001/registro", 
  frmData, 
  {headers: {"Content-Type": "multipart/form-data"}}
);
  

if (respuesta.data.msg === "OK") {
alert("Usuario registrado");
}else if (respuesta.data.msg === "ErrBD") {
  alert("Error al registrar usuario");
}

console.log(respuesta.data);

}catch (error) {
    console.log(error);
    alert("Error en petición al servidor");
}

}

  return (
  <div className="d-flex flex-column min-vh-100">
    <Navbar />
        <div className="container mt-5 flex-grow-1">
          <h2 className="mb-8 text-center">Registrar usuario</h2>
          <form onSubmit={sendDatos}
            className="p-4 border rounded shadow-sm bg-light"
          >
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
              
              onChange={(e) => setNombre(e.target.value) }
              />
               
            </div>

            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                name="correo"
                 onChange={(e) => setCorreo(e.target.value)}
              />
             
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="contraseña"
                  onChange={(e) => setContra(e.target.value)}
              />
            
            </div>

            <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input
                type="file"
                className="form-control"
                name="imagen"
                accept="image/*"
                onChange={(e) => setArchivo(e.target.files[0])}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </form>
        </div>
        <Footer />
      </div>
      
    );
}   