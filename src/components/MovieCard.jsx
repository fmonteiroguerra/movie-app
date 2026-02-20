import React from "react";
import ModalMovieDetail from "./ModalMovieDetail";

const MovieCard = ({
  movie: {
    title,
    id,
    vote_average,
    poster_path,
    original_language,
    release_date,
    overview,
    popularity,
  },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt=""
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
        <ModalMovieDetail
          title={title}
          id={id}
          vote_average={vote_average}
          poster_path={poster_path}
          original_language={original_language}
          release_date={release_date}
          overview={overview}
          popularity={popularity}
        />
      </div>
    </div>
  );
};

export default MovieCard;
