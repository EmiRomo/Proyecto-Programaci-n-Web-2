import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiSearch, FiUser } from 'react-icons/fi';
import React from "react";
import "../ValoresQuejas.css";

export default function FeedbackPage() {
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
  ];

  const dishes = [
    { name: "Platillo 1", rating: 7.5, image: "/imagenes/Platillo.jpg" },
    { name: "Platillo 2", rating: 8.2, image: "/imagenes/Platillo.jpg" },
    { name: "Platillo 3", rating: 9.0, image: "/imagenes/Platillo.jpg" },
    { name: "Platillo 4", rating: 7.0, image: "/imagenes/Platillo.jpg" },
  ];

  return (
    <div className="feedback-page">
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
      <div className="feedback-subheader">Valoraciones y quejas</div>
      <div className="feedback-subheader-orange"></div>

      <div className="feedback-container">
        {/* Sección de Quejas */}
        <div className="feedback-complaints-section">
          <div className="feedback-complaints-header">
            <h3>Últimas quejas:</h3>
            <Link to="/Quejas" className="btn-orange">Ver más</Link>
          </div>

           {/* Caja scrollable */}
           <div className="feedback-complaints-box">
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

        {/* Sección Valoraciones */}
        <div className="feedback-dishes-section">
          <h3>Valoraciones de platillos:</h3>
          <div className="feedback-dishes-grid">
            {dishes.map((d, i) => (
              <div key={i} className="dish-card">
                <img src={d.image} alt={d.name} />
                <div className="dish-info">
                  <h4>{d.name}</h4>
                  <p>Valoración actual: {d.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
