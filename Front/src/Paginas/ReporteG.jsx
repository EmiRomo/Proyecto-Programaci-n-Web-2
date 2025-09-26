import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiSearch, FiUser } from 'react-icons/fi';
import React from "react";
import "../ReporteG.css";

const ReporteG = () => {
  const usuarios = [
    "Usuario 1",
    "Usuario 2",
    "Usuario 3",
    "Usuario 4",
    "Usuario 5",
    "Usuario 6",
  ];

  return (
    <div className="reporte-container">
        
       {/* HEADER SUPERIOR */}
       <header className="Admin-header">
            <div className="header-logo">
                <img src="/imagenes/logo.jpeg" alt="Logo Marina" />
            </div>
            <div className="header-search">
                <input type="text" placeholder="Buscar..." />
                <button className="search-btn"> <FiSearch size={20} /></button>
            </div>
            <div className="header-icons">
                <button className="icon-btn"><FiUser size={35} /></button>
            </div>
       </header>
        
       {/* Subheader */}
      <div className="feedback-subheader">Reporte General</div>
      <div className="feedback-subheader-orange"></div>

      {/* Contenido principal */}
      <div className="reporte-content">
        <h3 className="reporte-title">Información general</h3>
        <div className="reporte-grid">
            {/* COLUMNA IZQUIERDA */}
            <div className="columna-izquierda">
                {/* Arriba: Usuarios SCROLLABLE */}
                <div className="usuarios-section">
                <h4>Usuarios registrados el último mes:</h4>
                <div className="usuarios-list"> {/* ⬅️ Este div es scrolleable */}
                    {usuarios.map((user, index) => (
                    <div key={index} className="usuario-item">
                        {user}
                    </div>
                    ))}
                </div>
                </div>

                {/* Abajo: Dinero ganado */}
                <div className="dinero-ganado-section">
                <div className="stat-card azul">
                    <h4>Dinero ganado</h4>
                    <p>$$$$</p>
                </div>
                </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="estadisticas-section">
                <div className="stat1-card azul">
                <h4>Ventas</h4>
                <p>$$$$</p>
                </div>
                <div className="stat2-card naranja">
                <h4>Cantidad clientes</h4>
                <p>##</p>
                </div>
                <div className="stat3-card naranja">
                <h4>Cantidad de eventos realizados</h4>
                <p>##</p>
                </div>
            </div>
            </div> 
      </div>
    </div>
  );
};

export default ReporteG;
