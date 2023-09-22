import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pokemones, setPokemones] = useState([]);
    const [limite, setLimite] = useState(20);
    const [filtroNombre] = useState('');
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(0);
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${limite}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        setPokemones(jsonData.results);
      })
      .catch(error => {
        alert('No se pudo establecer conexión a la API. ');
      })
    //}, [limite, pokemones]); // Dependencia circular. useEffect se va a llamar "a sí mismo" ya que
    //pokemones se modifica todo el tiempo.
    }, [limite]);
  
    const capturarLimite = (event) => {
      setLimite(event.target.value);
    }
  
    const capturarFiltroNombre = (event) => {
      setFiltroNombre(event.target.value);
    }

    const seleccionarPokemon = (idPokemon) => {
        setPokemonSeleccionado(idPokemon);
    }
  
    return (
      <>

        <p><Link to={'/about'}>Acerca de </Link></p>
        <p><Link to={'/pokemon/2'}>Detalle Pokémon </Link></p>

        <h1>Pokedex</h1>
        <label>Límite de Pokemones: </label>
        <input 
          value={limite}
          onChange={capturarLimite}
        />
  
        {/*<label>Búsqueda por nombre: </label>
        <input 
          value={filtroNombre}
          onChange={capturarFiltroNombre}
        />*/}
        

        {
        pokemones.map((pokemon, index) => {
            return (
                <button 
                    key={index} 
                    onClick={() => seleccionarPokemon(pokemon.url)}
                >
                    <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>{pokemon.name}</Link>
                </button>
            )
        })
        }
        { /*<DetallePokemon urlPokemon={pokemonSeleccionado}/> */}
      </>
      
    )
}

export default Home;