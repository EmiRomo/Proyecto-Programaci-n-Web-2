import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal';

import InicioSesion from './Paginas/InicioSesion';
import Registro from './Paginas/Registro';

import RegistroN from './Paginas/RegistroN';
import InicioSesionN from './Paginas/InicioSesionN';
import Reservacion from './Paginas/Reservacion';
import ReservaConsul from './Paginas/ReservaConsulta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroN/>}></Route>
        <Route path="/InicioSesion" element={<InicioSesion/>}></Route>
        <Route path="/Principal" element={<Principal/>}></Route>
        <Route path="/Registro" element={<Registro/>}></Route>

        <Route path="/InicioSesionN" element={<InicioSesionN/>}></Route>
        <Route path="/RegistroN" element={<RegistroN/>}></Route>
        <Route path="/Reservacion" element={<Reservacion/>}></Route>
         <Route path="/ReservaConsulta" element={<ReservaConsul/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
