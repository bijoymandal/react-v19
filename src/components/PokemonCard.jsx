export function PokemonCard({ pokemonData }) {
  const { id, name, height, sprites, weight, types, stats, base_experience } =
    pokemonData || {};
  const speed = stats?.find((s) => s.stat.name === "speed")?.base_stat || 0;
  const attack = stats?.find((s) => s.stat.name === "attack")?.base_stat || 0;
  return (
    <div
      key={id}
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105"
    >
      <img
        src={sprites.other.dream_world.front_default}
        alt={`${name} sprite`}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 capitalize hover:text-blue-600 transition-colors text-center">
          {name}
        </h2>

        <div className="flex justify-center flex-wrap gap-2 mt-2">
          {types.map((curr, i) => (
            <span
              key={i}
              className="text-sm bg-gray-200 px-3 py-1 rounded-full font-medium text-gray-700 capitalize"
            >
              {curr.type.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 text-center mt-2">
          <div>
            <span className="font-medium">Height</span>
            <div>{height}</div>
          </div>
          <div>
            <span className="font-medium">Weight</span>
            <div>{weight}</div>
          </div>
          <div>
            <span className="font-medium">Speed </span>
            <div>{speed}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 text-center mt-2">
          <div>
            <span className="font-medium">Experience</span>
            <div>{base_experience}</div>
          </div>
          <div>
            <span className="font-medium">Attack</span>
            <div>{attack}</div>
          </div>
          <div>
            <span className="font-medium">Abilities </span>
            <div>{speed}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
