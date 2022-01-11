import { useSelector } from "react-redux";
import MovieCard from "../movies/MovieCard";
import { cartoonMovie } from "../movies/movieSlice";


const Cartoon = () => {
    const cartoonData = useSelector(cartoonMovie);
    const cartoons = cartoonData.Search;

    return (
        <div className="movie-hot">
            <h3>Cartoon</h3>
            <hr />
            <div className="list-film">
                {cartoons?.map((cartoon, index) => {
                    return <MovieCard data={cartoon} key={index} />;
                })}
            </div>
        </div>
    )
}

export default Cartoon