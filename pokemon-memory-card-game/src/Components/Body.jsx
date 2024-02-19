import '../styles/body.css';
import { useState, useEffect } from 'react';
import Prompt from './Prompt';
function Body() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedPokemon,setClickedPokemon]=useState([]);
  const [unique,setUnique]=useState(0);
  const[gameOver,setGameOver]=useState(false);
  const [gameCompleted,setGameCompleted]=useState(false);
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
            image: data.sprites.other.showdown.front_shiny,
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

  function handleLoss(){
    setGameOver(g=>true);
    setClickedPokemon(p=>[]);
    setUnique(0);
  }
  function handlePokemonClick(name){
    // randomize the indexes of pokemon.
    console.log(name)
    for(let i=0;i<clickedPokemon.length+1;i++){
        if(clickedPokemon[i]==name){
            handleLoss();
            break;
        }else{
            if(unique==8){
                setGameCompleted(g=>true);
            }
            setClickedPokemon(p=>[...clickedPokemon,name]);
            let shuffled = pokemonList
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            
            setPokemonList(p=>shuffled);
            setUnique(p=>unique+1);
        }
    }
  }
  return (
    <div>
        <Prompt gameOver={gameOver} gameCompleted={gameCompleted}/>
        <h2 className="counter">Unique Pokemon Clicked: {unique}</h2>
        <div className="pokemon-grid">
            {pokemonList.map((poke, index) => (
            <div key={index} className="grid-item">
            <p>{poke.name}</p>
            <img src={poke.image} alt={poke.name} onClick={()=>{handlePokemonClick(poke.name)}}/>
            </div>
            ))}
        </div>
    </div>
    
  );
}

export default Body;