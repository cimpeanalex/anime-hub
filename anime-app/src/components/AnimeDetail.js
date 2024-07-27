import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnime(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!anime) return <div>Loading...</div>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>{anime.synopsis}</p>
      <img src={anime.images.jpg.large_image_url} alt={anime.title} />
    </div>
  );
};

export default AnimeDetail;
