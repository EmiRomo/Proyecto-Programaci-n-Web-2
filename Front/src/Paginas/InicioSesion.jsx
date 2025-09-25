import { Footer, Navbar } from "../Componentes/NavFoot";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InicioSesion() {
  const[correo, setCorreo] = useState("");
  const[contra, setContra] = useState("");

  const redirect = useNavigate();

  localStorage.clear();
  localStorage.removeItem("usuario");
  
  const login = async(event) => {
    event.preventDefault();

    try {

      const respServer = await axios.post("http://localhost:3001/login", 
        {
          email: correo,
          pass: contra 
        }
      )

      if (respServer.data.msg === "encontrado") {

        localStorage.setItem("usuario", respServer.data.info);

        redirect("/Principal");

      }else if (respServer.data.msg === "noEncontrado") {


        alert("Usuario no encontrado. Verifique sus datos");
      }


    }catch (error) {
      console.log(error);
      alert("Error al procesar el login");
    }
  }

  return ( 
   <div className="d-flex flex-column min-vh-100">
     <Navbar />
         <div className="container mt-5 flex-grow-1">
           <h2 className="mb-8 text-center">Inicio Sesion</h2>
           <form 
             className="p-4 border rounded shadow-sm bg-light"
              onSubmit={login}
           >
  
 
             <div className="mb-3">
               <label className="form-label">Correo</label>
               <input
                 type="email"
                 className="form-control"
                 name="correo"
                 onChange={(event) => setCorreo(event.target.value) }
               />
              
             </div>
 
             <div className="mb-3">
               <label className="form-label">Contraseña</label>
               <input
                 type="password"
                 className="form-control"
                 name="contraseña"
                 onChange={(event) => setContra(event.target.value) }
               />
             </div>
 
 
             <button type="submit" className="btn btn-primary w-100">
               Entrar
             </button>
           </form>
         </div>
         <Footer />
       </div>
       
     );
}

export default InicioSesion;