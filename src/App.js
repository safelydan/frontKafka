// src/App.js
import React from 'react';
import TrackCarousel from './TrackCarousel';
import './App.css'; // Adicione estilos globais, se necessário

function App() {
    return (
        <div className="App">
            <h1>Top 10 Tracks</h1>
            <TrackCarousel />
        </div>
    );
}

export default App;
