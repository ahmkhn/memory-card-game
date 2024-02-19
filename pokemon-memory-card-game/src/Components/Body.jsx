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

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/salamence")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 3rd pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/gengar")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 4th pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/garchomp")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 5th pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/kyurem")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 6th pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/greninja")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 7th pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/gyarados")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); // 8th pokemon

                apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon/blaziken")
                data=await(apiReturn.json());
                setPokemon(p=>({
                    name:data.name,
                    image:data.sprites.shiny,
                }));
                setPokemonList(p=>[...pokemonList,{pokemon}]); //9th pokemon


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