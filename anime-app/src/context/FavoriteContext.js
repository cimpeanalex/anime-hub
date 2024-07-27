import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (anime) => {
    setFavorites((prevFavorites) => [...prevFavorites, anime]);
  };

  const removeFavorite = (animeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((anime) => anime.mal_id !== animeId)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
