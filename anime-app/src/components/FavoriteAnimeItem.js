import React from "react";
import "./FavoriteAnimeItem.css";

const FavoriteAnimeItem = ({ anime, removeFromFavorites }) => {
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
      <button
        className="favorite-button"
        onClick={() => removeFromFavorites(anime.mal_id)}
      >
        Remove from Favorites
      </button>
    </div>
  );
};

export default FavoriteAnimeItem;
