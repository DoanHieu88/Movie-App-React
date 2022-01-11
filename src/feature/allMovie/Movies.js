import { useSelector } from 'react-redux';
import { movieData } from '../movies/movieSlice';
import MovieCard from '../movies/MovieCard';

const Movies = () => {
    const moviesData = useSelector(movieData);
    const movies = moviesData.Search;

    return (
        <div className="movie-hot">
            <h3>Film Hot</h3>
            <hr />
            <div className="list-film">
                {movies?.map((movie, index) => {
                    return <MovieCard data={movie} key={index} />;
                })}
            </div>
        </div>
    )

}

export default Movies