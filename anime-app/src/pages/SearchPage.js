import React, { useState } from "react";
import AnimeList from "../components/AnimeList";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [animes, setAnimes] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`)
      .then((response) => response.json())
      .then((data) => setAnimes(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h1>Search Anime</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter anime name"
      />
      <button onClick={handleSearch}>Search</button>
      <AnimeList animes={animes} />
    </div>
  );
};

export default SearchPage;
