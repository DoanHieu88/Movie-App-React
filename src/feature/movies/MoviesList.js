import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

export default function MoviesList() {
  const state = useSelector((state) => state.movie);
  const movies = state.movie.Search;

  return (
    <div className="movie-hot">
      <h3>Film Hot</h3>
      <hr />
      <div className="list-film">
        {movies?.map((movie, index) => {
          return <MovieCard data={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
