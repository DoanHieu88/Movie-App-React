import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import Cartoon from "../allMovie/Cartoon";
import Movies from "../allMovie/Movies";
import SearchMovie from "../allMovie/SearchMovie";
import { searchMovie } from "./movieSlice";


export default function MoviesList() {
  const searchMovieData = useSelector(searchMovie);

  return (
    <Fragment>
      {searchMovieData.Search ? (<SearchMovie />) : null}
      <Movies />
      <Cartoon />
    </Fragment>
  );
}
