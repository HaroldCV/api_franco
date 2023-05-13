import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí podrías realizar una petición al backend para validar las credenciales
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="center-content">
    <div className="container">
      <div className='header_gr_text d-flex justify-content-center'>
        <h1 className="gradient__text">Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
            <div className='header_gr_text'>
                <label htmlFor="username" className="gradient__text">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
        </div>
        <div className="mb-3">
            <div className='header_gr_text'>
                <label htmlFor="password" className="gradient__text">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <button type="submit" className="boton_p1">Login</button>
      </form>
    </div>
  </div>
  
  );
}

export default Login;
