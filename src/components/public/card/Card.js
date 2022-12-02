import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./card.css";

const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
    return (
        <div>
            {
        isLoading
        ?
        <div className="cards">
          
        </div>
        :
        <NavLink to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
                <div className="overlay">
                    <div className="title">{movie?movie.original_title:""}</div>
                    <div className="runtime">
                        {movie?movie.release_date:""}
                        <span className="rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </NavLink>
    } 
        </div>
    );
};

export default Card;