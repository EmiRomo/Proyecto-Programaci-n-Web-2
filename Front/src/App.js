import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal';

import RegistroN from './Paginas/RegistroN';
import InicioSesionN from './Paginas/InicioSesionN';
import Reservacion from './Paginas/Reservacion';
import ReservaConsul from './Paginas/ReservaConsulta';
import Valoraciones from './Paginas/Valoraciones';
import Quejas from './Paginas/Quejas';
import ReporteG from './Paginas/ReporteG';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroN/>}></Route>
        <Route path="/Principal" element={<Principal/>}></Route>

        <Route path="/InicioSesionN" element={<InicioSesionN/>}></Route>
        <Route path="/RegistroN" element={<RegistroN/>}></Route>
        <Route path="/Reservacion" element={<Reservacion/>}></Route>
        <Route path="/ReservaConsulta" element={<ReservaConsul/>}></Route>
        <Route path="/Valoraciones" element={<Valoraciones/>}></Route>
        <Route path="/Quejas" element={<Quejas/>}></Route>
        <Route path="/ReporteG" element={<ReporteG/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
