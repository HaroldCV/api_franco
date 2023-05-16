import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    axios.post('http://lb-prod-600045538.us-east-1.elb.amazonaws.com:8000/register', formData)
      .then(response => {
        console.log(response.data);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error(error);
      });
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
                <input type="text" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <button type="submit" className="boton_p1">Login</button>
      </form>
    </div>
  </div>
  
  );
}

export default Login;
