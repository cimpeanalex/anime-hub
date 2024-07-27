import React from "react";
import AnimeItem from "./AnimeItem";
import "./AnimeList.css";

const AnimeList = ({ animes, addToFavorites }) => {
  return (
    <div className="anime-list">
      {animes.map((anime) => (
        <AnimeItem
          key={anime.mal_id}
          anime={anime}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

export default AnimeList;
