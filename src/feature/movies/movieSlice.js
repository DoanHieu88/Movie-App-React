import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    API_KEY
} from '../../until/API_KEY';
import api from '../../until/api';

const init = {
    searchInput: {},
    searchMovie: {},
    movie: {},
    cartoonMovie: {},
    movieDetail: {},
    loading: false
};

export const asyncSearchData = createAsyncThunk(
    'movie/takeData',
    async (film) => {
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&s=${film}&Type=movie`);
            return reponse.data
        } catch (err) {
            console.log('err1', err);
        }
    }
)
export const asyncMoviesData = createAsyncThunk(
    'movie/movieData',
    async () => {
        const film = 'dragon'
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&s=${film}&Type=movie`);
            return reponse.data
        } catch (err) {
            console.log('err2', err);
        }
    }
)
export const asyncCartoonMovie = createAsyncThunk(
    'movie/cartoonData',
    async () => {
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&s=cartoon&Type=movie`);
            return reponse.data
        } catch (error) {
            console.log('err3', error);
        }
    }
)


export const asyncMovieDetail = createAsyncThunk(
    'movie/movieDetail',

    async (id) => {
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
            return reponse.data;
        } catch (error) {
            console.log('err3', error);
        }
    }
)
const movieSlice = createSlice({
    name: 'movies',
    initialState: init,
    reducers: {
        takeFormData: (state, action) => void (state.searchInput = action.payload.input)
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncSearchData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(asyncSearchData.fulfilled, (state, action) => {
                state.loading = false;
                state.searchMovie = action.payload
            })
            .addCase(asyncSearchData.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(asyncMoviesData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(asyncMoviesData.fulfilled, (state, action) => {
                state.loading = false;
                state.movie = action.payload
            })
            .addCase(asyncMoviesData.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(asyncCartoonMovie.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(asyncCartoonMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.cartoonMovie = action.payload
            })
            .addCase(asyncCartoonMovie.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(asyncMovieDetail.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(asyncMovieDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.movieDetail = action.payload;
            })
            .addCase(asyncMovieDetail.rejected, (state, action) => {
                state.loading = false;
            })
    }
});

export const searchMovie = (state) => state.movie.searchMovie;
export const searchInput = (state) => state.movie.searchInput;
export const loaderMovie = (state) => state.movie.loading;
export const movieData = (state) => state.movie.movie;
export const cartoonMovie = (state) => state.movie.cartoonMovie;
export const movieDetail = (state) => state.movie.movieDetail;
export const { takeFormData } = movieSlice.actions
export default movieSlice.reducer;
