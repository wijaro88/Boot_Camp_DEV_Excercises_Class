import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [pokemones, setPokemons] = useState([]);
  const [limite, setLimite] = useState(20);
  const [filtroNombre] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${limite}`)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      setPokemons(jsonData.results);
    })
    .catch(error => {
      alert('No se pudo establecer conexión a la API. ');
    })
  }, [limite, pokemones]);

  const capturarLimite = (event) => {
    setLimite(event.target.value);
  }

  const capturarFiltroNombre = (event) => {
    setFiltroNombre(event.target.value);
  }

  return (
    <>
      <h1>Pokedex</h1>
      <label>Límite de Pokemones: </label>
      <input 
        value={limite}
        onChange={capturarLimite}
      />

      <br/>
      <label>Búsqueda por nombre: </label>
      <input 
        value={filtroNombre}
        onChange={capturarFiltroNombre}
      />
    </>
    
  )
}

export default App