import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal';

import InicioSesion from './Paginas/InicioSesion(adaptado).jxs';
import Registro from './Paginas/Registro';
import RegistroN from './Paginas/Registro(Nuevo)';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroN/>}></Route>
        <Route path="/InicioSesion" element={<InicioSesion/>}></Route>
        <Route path="/Principal" element={<Principal/>}></Route>
        <Route path="/Registro" element={<Registro/>}></Route>

        <Route path="/InicioSesion(Nuevo)" element={<InicioSesion/>}></Route>
        <Route path="/Registro(Nuevo)" element={<RegistroN/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
