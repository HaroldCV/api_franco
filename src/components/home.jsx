import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
function Home() {
  return (
    <div className="center-content">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h1 className="card-title mb-4">Bienvenido a mi aplicación!</h1>
                <p className="card-text">Por favor, inicia sesión para acceder al contenido.</p>
                <Link to="/login" className="boton_p1" style={{textDecoration: 'none'}}>Iniciar sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Home;
