import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncMoviesData, asyncCartoonMovie } from '../feature/movies/movieSlice';
import Loading from './Loading';
import MoviesList from '../feature/movies/MoviesList'
// import Slider from './Slider';

export default function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.movie);
    useEffect(() => {
        dispatch(asyncMoviesData());
        dispatch(asyncCartoonMovie())
    }, [dispatch]);

    if (state.loading) {
        return <Loading />
    } else {
        return (
            <Fragment>
                {/* <Slider /> */}
                <MoviesList />
            </Fragment>
        )
    }
}
