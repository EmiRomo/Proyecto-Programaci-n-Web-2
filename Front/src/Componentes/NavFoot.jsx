import { Link } from "react-router-dom";

export function Navbar() {

  const userNamer=localStorage.getItem("usuario");

    return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold" href="/">
        MiApp
      </a>

      <div className="ms-auto d-flex align-items-center gap-3">

        {
          userNamer ?
          <>
            <span className="text-white">👋 Hola, {userNamer}</span>
            <Link to="/InicioSesion" className="btn btn-outline-light btn-sm">
              Cerrar sesión
            </Link>
          </>
          :
          <>
            <span className="text-white"></span>
            <Link to="/InicioSesion" className="btn btn-outline-light btn-sm">
              Cerrar sesión
            </Link>
          </>
        }
        
        <>
          <Link to="/InicioSesion" className="btn btn-outline-light btn-sm">
            Iniciar sesión
          </Link>

          <Link to="/Registro" className="btn btn-primary btn-sm">
            Registrarse
          </Link>

        </>
      </div>
    </header>

);
}

export function Footer() {
    return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p>
        {" "}
        Creado por <b>Angeles</b>
      </p>
    </footer>
    
);
}   