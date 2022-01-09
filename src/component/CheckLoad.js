import React from 'react'
import { useSelector } from 'react-redux'
import { loaderMovie } from '../feature/movies/movieSlice'
import Loading from './Loading';

export default function CheckLoad({ component: Component }) {
    const loader = useSelector(loaderMovie);

    if (loader) {
        return <Loading />
    } else {
        return <Component />
    }
}
