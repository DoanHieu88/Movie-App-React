import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncMoviesData, asyncSliderMovie } from '../feature/movies/movieSlice';
import Loading from './Loading';
import MoviesList from '../feature/movies/MoviesList'
import Slider from './Slider';

export default function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.movie);
    useEffect(() => {
        const movieDragon = 'dragon'
        dispatch(asyncMoviesData(movieDragon));
        dispatch(asyncSliderMovie())
    }, [dispatch]);

    if (state.loading) {
        return <Loading />
    } else {
        return (
            <Fragment>
                <Slider />
                <MoviesList />
            </Fragment>
        )
    }
}
