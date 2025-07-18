import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8000/api/register/', { username, password });
      alert('Registro exitoso');
      navigate('/');
    } catch {
      alert('Error en el registro');
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
export default Register;
