import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    API_KEY
} from '../../until/API_KEY';
import api from '../../until/api';

const init = {
    sliderMovie: {},
    movie: {},
    movieDetail: {},
    loading: false
};

export const asyncSliderMovie = createAsyncThunk(
    'movie/sliderData',
    async () => {
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&s=cartoon&Type=movie`);
            return reponse.data
        } catch (error) {
            console.log('err1', error);
        }
    }
)

export const asyncMoviesData = createAsyncThunk(
    'movie/takeData',
    async (film) => {
        try {
            const reponse = await api.get(`?apikey=${API_KEY}&s=${film}&Type=movie`);
            return reponse.data
        } catch (err) {
            console.log('err2', err);
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
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            .addCase(asyncSliderMovie.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(asyncSliderMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.sliderMovie = action.payload
            })
            .addCase(asyncSliderMovie.rejected, (state, action) => {
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

export const loaderMovie = (state) => state.movie.loading;
export const movieData = (state) => state.movie.movie;
export const sliderMovie = (state) => state.movie.sliderMovie;
export const movieDetail = (state) => state.movie.movieDetail;
export default movieSlice.reducer;
