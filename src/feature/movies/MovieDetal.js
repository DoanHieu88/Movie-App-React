import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncMovieDetail, loaderMovie, movieDetail } from './movieSlice';
import Loading from '../../component/Loading'

export default function MovieDetal() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(movieDetail);
    const checkLoader = useSelector(loaderMovie)
    const { Title, Year, Runtime, Poster, imdbRating, Actors, Plot } = data;

    useEffect(() => {
        dispatch(asyncMovieDetail(imdbID))
    }, [dispatch, imdbID])

    if (checkLoader) {
        return <Loading />
    } else {
        return (
            <div className='movie-detail-container'>
                <div className="left-content">
                    <h2 className='title-film'>{Title} <span className='year'>{Year}</span></h2>
                    <div className="actors">
                        <h4 className='actor-heading'>Actors:</h4>
                        <span className='actor'>{Actors}</span>
                    </div>
                    <h4 className='movie-summary'>Movie Summary:</h4>
                    <p className='plot'>{Plot}</p>
                </div>
                <div className="right-content">
                    <img src={Poster} alt={Title} />
                    <div className="note-film">
                        <div className="timer">
                            <h6 className='quality'>Quality: Full HD</h6>
                            <h6>Time: {Runtime}</h6>
                        </div>
                        <button className='btn btn-primary'>Watch film</button>
                    </div>
                    <div className="rate">
                        Ratings:
                        <span><i className='fas fa-star fill'></i></span>
                        <span><i className='fas fa-star fill'></i></span>
                        <span><i className='fas fa-star fill'></i></span>
                        <span><i className='fas fa-star fill'></i></span>
                        <span><i className='fas fa-star'></i></span>
                        <p className="ratings">{imdbRating}</p>
                    </div>
                </div>
            </div>
        )
    }

}
