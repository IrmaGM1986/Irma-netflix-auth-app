import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    axios.get('http://localhost:8000/api/movies/', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setMovies(res.data)).catch(() => navigate('/'));
  }, [navigate]);

  return (
    <div className='container'>
      <h2>Películas</h2>
      <ul>
        {movies.map(m => (<li key={m.id}>{m.title} - {m.genre}</li>))}
      </ul>
    </div>
  );
}
export default Home;
