import React from "react";
import "./AnimeItem.css";

const AnimeItem = ({ anime, addToFavorites }) => {
  return (
    <div className="anime-item">
      <div className="anime-image-container">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="anime-image"
        />
      </div>
      <h3>{anime.title}</h3>
      <button className="favorite-button" onClick={() => addToFavorites(anime)}>
        Add to Favorites
      </button>
    </div>
  );
};

export default AnimeItem;
