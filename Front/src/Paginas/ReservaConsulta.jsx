import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../Reservacion.css";
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { HiOutlineSearch, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';

export default function ReservaConsulta() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="reservacion-container">
      {/* HEADER SUPERIOR */}
      <header className="reservacion-header">
        <div className="header-logo">
          <img src="/imagenes/logo.jpeg" alt="Logo Marina" />
        </div>
        <div className="header-search">
          <input type="text" placeholder="Buscar..." />
          <button className="search-btn"> <FiSearch size={20} /></button>
        </div>
        <div className="header-icons">
          <button className="icon-btn"><FiShoppingCart size={30} /></button>
          <button className="icon-btn"><FiUser size={30} /></button>
        </div>
      </header>

      {/* SUBHEADER */}
        <div className="reservacion-subheader">
            <img src="/imagenes/Subheader.jpg" alt="Imagen header reserva" className="subheader-image"/>
            <h2 className="subheader-title">Busca su reserva</h2>
            <select id="tipo-evento">
                <option>Seleccione</option>
                <option>Boda 1:00pm</option>
            </select>
        </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="resconsulta-main">

        {/* Imagen */}
        <div className="imagen-resconsulta">
            <img src="/imagenes/Resconsul.jpg" alt="Evento" className="imagen-reconsul" />
        </div>

        {/* Informacion */}
        <div className="reservacion-form">
            <div className="form-group">
                <label htmlFor="tipo-evento">Tipo de evento:</label>
                <select id="tipo-evento" disabled> {/* disabled para solo lectura */}
                <option>Boda</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="fecha">Fecha:</label>
                <input type="text" id="fecha" disabled />
            </div>

            <div className="form-group">
                <label htmlFor="invitados">Número de invitados:</label>
                <input type="number" id="invitados" min="1" disabled />
            </div>

            <div className="form-group">
                <label htmlFor="hora">Hora de reservación:</label>
                <select id="hora" disabled>
                <option>9:00 AM</option>
                </select>
            </div>
        
            <button className="btn-modificar">Modificar</button>
            <button className="btn-eliminar">Eliminar</button>
            
        </div>

        {/* Calendario */}
        <div className="reservacion-calendario">
           <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </div>
      </main>
    </div>
  );
}
