import '../styles/body.css';
import { useState, useEffect } from 'react';

function Body() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonNames = [
          'marshadow', 'lucario', 'salamence',
          'gengar', 'garchomp', 'kyurem',
          'greninja', 'gyarados', 'blaziken'
        ];

        const promises = pokemonNames.map(async (name) => {
          const apiReturn = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          if (!apiReturn.ok) {
            throw new Error(`Error in ${name}`);
          }

          const data = await apiReturn.json();

          return {
            name: data.name,
            image: data.sprites.front_shiny,
          };
        });

        const newPokemonList = await Promise.all(promises);
        setPokemonList((prevList) => newPokemonList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemonList.map((poke, index) => (
        <div key={index} className="grid-item">
          <p>Name: {poke.name}</p>
          <img src={poke.image} alt={poke.name} />
        </div>
      ))}
    </div>
  );
}

export default Body;