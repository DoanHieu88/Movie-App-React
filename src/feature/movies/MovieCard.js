import React from "react";
import { Link } from "react-router-dom";

export default function movieCard({ data }) {
    const { Poster, Title, Year, imdbID } = data;
    return (
        <Link to={`/movie/${imdbID}`}>
            <div className="card">
                <img src={Poster} alt={Title} />
                <div className="footer-card">
                    <h4 className="title-card">{Title}</h4>
                    <p className="year-card">{Year}</p>
                </div>
                <div className="play-film">
                    <i className="fas fa-play"></i>
                </div>
            </div>
        </Link>
    );
}
