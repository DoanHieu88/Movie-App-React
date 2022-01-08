import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    API_KEY
} from '../../until/API_KEY';
import api from '../../until/api';


const init = {
    movie: {},
    movieDetail: {},
    loading: false
};

export const asyncMoviesData = createAsyncThunk(
    'movie/takeData',
    async (film) => {
        const reponse = await api.get(`?apikey=${API_KEY}&s=${film}&Type=movie`);
        return reponse.data
    }
)

export const asyncMovieDetail = createAsyncThunk(
    'movie/movieDetail',

    async (id) => {
        const reponse = await api.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
        console.log(reponse.data);
        return reponse.data;
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

export default movieSlice.reducer;