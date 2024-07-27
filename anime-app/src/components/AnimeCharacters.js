import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeCharacters = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.character.mal_id}>{character.character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeCharacters;
