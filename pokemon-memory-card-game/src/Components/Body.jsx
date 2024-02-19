import '../styles/body.css';
import {useState, useEffect} from 'react';

function Body(){
    const [pokemonList,setPokemonList]=useState([{
        name:"",
        image:"",
    }]);
    const [pokemon,setPokemon]=useState({
        name:"",
        image:"",
    }); // imageUrl
    // let's fetch data from the pokemon API.
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/marshadow");
                if(!apiReturn.ok){
                    throw new Error("Error in pokemon name");
                }
                let apiData = apiReturn.json();
                console.log(apiData.sprites.front_shiny);
                setPokemon(p=>({
                    name:apiData.name,
                    image:apiData.sprites.front_shiny
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]);

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/lucario")
                console.log(apiData);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[]);
    return(
        <div>
            
        </div>
    );
}
export default Body;