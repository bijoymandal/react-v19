import { useEffect, useState } from "react";
import { PokemonCard } from "../components/PokemonCard";
// import PokemonCard from "..components/PokemonCard";
const PokeMonAPI = ()=>{
    const [Pokemon, setPokemon] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

    const fetAPI = async ()=>{
        try{
            const response = await fetch(API);
            const data = await response.json();
            const pokemon = data.results.map(async(item)=>{

                const response = await fetch(item.url);
                const data = await response.json();
                return data;
            });
            const result = await Promise.all(pokemon);
            setPokemon(result);
            console.log(result);

        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{
        fetAPI();
        // console.log("Hello Once")
        // return () => {
        //     console.log("Hello Once")
        // }
        // return () => {
        //     console.log("Hello Once")
        // }
    },[]);
    return(
        <>
            <section className="container mx-auto p-4">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Lets Catch Pokémon</h1>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Pokemon.map((item) => {
                        return (
                            <PokemonCard key={item.id} pokemonData={item} />
                        );
                    })};
                </div>
            </section>
        </>
    );
}

export default PokeMonAPI;