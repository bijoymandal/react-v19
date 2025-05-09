import { useEffect, useState } from "react";
import { PokemonCard } from "../components/PokemonCard";
// import PokemonCard from "..components/PokemonCard";
const PokeMonAPI = () => {
  const [Pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

  const fetAPI = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      const pokemon = data.results.map(async (item) => {
        const response = await fetch(item.url);
        const data = await response.json();
        return data;
      });
      const result = await Promise.all(pokemon);
      setPokemon(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetAPI();
  }, []);
  // search functionality
  const searchData = Pokemon.filter((item) => {
    if (search === null) return item;
    if (item.name.toLowerCase().includes(search.toLowerCase())) return item;
  });
  const pokemonData = searchData.length > 0 ? searchData : Pokemon;
  return (
    <>
      <section className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Lets Catch Pokémon
          </h1>
          <div className="relative w-full max-w-sm mx-auto mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 group">
              <svg
                className="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonData.map((item) => {
            return <PokemonCard key={item.id} pokemonData={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default PokeMonAPI;
