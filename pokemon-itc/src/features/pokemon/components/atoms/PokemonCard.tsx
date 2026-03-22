import { useState } from "react";
import { PokemonGifBaseUrl, PokemonImagesBaseUrl } from "../../api/APIroutes";

type Props = {
  pokemon: {
    name: string;
    url: string;
  };
};

export default function PokemonCard({ pokemon }: Props) {
  const id = pokemon.url.split("/").filter(Boolean).pop();

  const initialImage = `${PokemonGifBaseUrl}/${id}.gif`;
  const fallbackImage = `${PokemonImagesBaseUrl}/${id}.png`;
  const [image, setImage] = useState(initialImage);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center">
      <img
        src={image}
        alt={pokemon.name}
        className="w-20 h-20 object-contain"
        loading="lazy"
        onError={() => setImage(fallbackImage)}
      />

      <p className="mt-2 font-semibold capitalize">{pokemon.name}</p>
    </div>
  );
}