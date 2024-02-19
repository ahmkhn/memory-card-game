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
                let data = await(apiReturn.json());

                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]);

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/lucario")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 2nd pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/salamander")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 3rd pokemon


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