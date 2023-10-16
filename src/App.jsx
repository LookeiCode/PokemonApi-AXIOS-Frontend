import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:8000/pokemon');
      console.log(response.data);
      setPokemon(response.data);
    }

    getData();
  },[])

  return <ul>
    {pokemon.map((poke) => (<li key={pokemon.name}>{poke.name}</li>
    ))}
  </ul>
}

export default App
