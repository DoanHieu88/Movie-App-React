import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { movieData, sliderMovie } from "./movieSlice";

export default function MoviesList() {
  const moviesData = useSelector(movieData);
  const cartoonData = useSelector(sliderMovie);
  const movies = moviesData.Search;
  const cartoons = cartoonData.Search

  return (
    <Fragment>
      <div className="movie-hot">
        <h3>Film Hot</h3>
        <hr />
        <div className="list-film">
          {movies?.map((movie, index) => {
            return <MovieCard data={movie} key={index} />;
          })}
        </div>
      </div>
      <div className="movie-hot">
        <h3>Cartoon</h3>
        <hr />
        <div className="list-film">
          {cartoons?.map((cartoon, index) => {
            return <MovieCard data={cartoon} key={index} />;
          })}
        </div>
      </div>

    </Fragment>
  );
}
