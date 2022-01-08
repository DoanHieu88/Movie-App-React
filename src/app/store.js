import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../feature/movies/movieSlice'

export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

