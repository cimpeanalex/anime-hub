import React from "react";
import { useFavorites } from "../context/FavoriteContext";
import PageTitle from "../components/PageTitle";
import FavoriteAnimeItem from "../components/FavoriteAnimeItem";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <PageTitle title="Your Favorites" />
      {favorites.length === 0 ? (
        <p>You have no favorite animes yet.</p>
      ) : (
        <div className="anime-list">
          {favorites.map((anime) => (
            <FavoriteAnimeItem
              key={anime.mal_id}
              anime={anime}
              removeFromFavorites={removeFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
