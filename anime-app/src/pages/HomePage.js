import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoriteContext";
import AnimeList from "../components/AnimeList";
import PageTitle from "../components/PageTitle";
import "./HomePage.css";

const HomePage = () => {
  const { addFavorite } = useFavorites();
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await response.json();
        setAnimes(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="homepage">
      <PageTitle title="Top Anime" />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <AnimeList animes={animes} addToFavorites={addFavorite} />
    </div>
  );
};

export default HomePage;
