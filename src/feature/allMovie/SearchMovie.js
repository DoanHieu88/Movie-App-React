import { searchInput, searchMovie } from "../movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../movies/MovieCard";

const SearchMovie = () => {
    const searchInputData = useSelector(searchInput)
    const searchMovieData = useSelector(searchMovie);
    const movies = searchMovieData.Search;

    return (
        <div className="movie-hot">
            <h3>Film: {searchInputData}</h3>
            <hr />
            <div className="list-film">
                {movies?.map((movie, index) => {
                    return <MovieCard data={movie} key={index} />;
                })}
            </div>
        </div>
    )
}

export default SearchMovie;