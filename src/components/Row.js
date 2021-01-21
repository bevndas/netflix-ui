import React, { useState, useEffect } from "react";
import axios from "../apis/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import VideoPlayer from "./VideoPlayer";
import NotificationMessage from "../components/Notification";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [message, setmessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    console.log("clicked");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          console.log("here", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlar", urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log("no trialer");
          setmessage("Trailer could not be found!");
          console.log(err);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <VideoPlayer trailer={trailerUrl} />}
      <NotificationMessage message={message} type={"danger"} />
    </div>
  );
}

export default Row;
