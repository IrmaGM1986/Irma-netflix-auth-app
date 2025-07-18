import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', { username, password });
      localStorage.setItem('token', response.data.access);
      navigate('/home');
    } catch {
      alert('Login fallido');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
