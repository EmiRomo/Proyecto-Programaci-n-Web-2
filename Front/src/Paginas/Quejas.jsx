import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiSearch, FiUser } from 'react-icons/fi';
import React from "react";
import "../ValoresQuejas.css";

export default function ComplaintsPage() {
  const complaints = [
    {
      user: "Nombre usuario",
      complaint: "Mi pedido llegó de mala forma y toda la salsa tirada",
    },
    {
      user: "Nombre usuario",
      complaint: "La comida llegó fría y tardó mucho",
    },
    {
      user: "Nombre usuario",
      complaint: "El repartidor no fue amable",
    },
    {
      user: "Nombre usuario",
      complaint: "El pedido no coincidía con lo solicitado",
    },
  ];

  return (
    <div className="complaints-page">

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
        <div className="feedback-subheader"> Quejas</div>
        <div className="feedback-subheader-orange"></div>

      <div className="Qcomplaints-container">
        <div className="Qcomplaints-header">
          <h3>Listado de quejas:</h3>
          <Link to="/Valoraciones" className="btn-orange">Regresar</Link>
        </div>

        {/* Caja scrollable */}
        <div className="complaints-list">
          {complaints.map((c, i) => (
            <div key={i} className="complaint-card">
                <div className="complaint-content">
                    <p><strong>Pedido de </strong> {c.user}</p>
                    <p><strong>Motivo de queja:</strong> {c.complaint}</p>
                </div>
                <div className="complaint-actions">
                    <button className="btn-blue">Ver resumen del pedido</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
