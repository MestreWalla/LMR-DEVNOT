import './App.css';
import React from 'react';
import MapaAtual from './Mapa/MapaAtual';
import MapaLongitudeLatitude from './Mapa/MapaLongituteLatitude';
import MapaCidade from './Mapa/MapaCidade';
// Define o componente principal da aplicação, chamado 'App'.
function App() {
  return (
    <div className="App">
      <p>MAPA ATUAL</p>
      <MapaAtual />
      <p>MAPA LONGITUDE LATITUDE</p>
      <MapaLongitudeLatitude />
      <p>MAPA CIDADE</p>
      <MapaCidade />
    </div>
  );
}
// Exporta o componente 'App' como o componente principal da aplicação.
export default App;