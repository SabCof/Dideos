import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0a7b2064d3bc836ce685d7d25138cf1d&language=fr-FR`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }



        getData()
        window.scrollTo(0,0)
    }, [id])

    

    return (
        <div className="movie">
            <div className="intro">
                <img className="backdrop" src={`https://image.tmdb.org/t/p/original/${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
            </div>
            <div className="detail">
                <div className="detailLeft">
                    <div className="posterBox">
                        <img className="identity" src={`https://image.tmdb.org/t/p/original${currentMovieDetail?currentMovieDetail.poster_path : ""}`}alt="" />
                    </div>
                </div>
                <div className="detailRight">
                    <div className="detailRightTop">
                        <div className="name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="links">
                <div className="heading">Liens Utils</div>
                
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && 
                    <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="" style={{textDecoration: "none"}}>
                        <p><span className="imdbButton Button">IMDb
                        <i className="newTab fas fa-external-link-alt"></i>
                        </span></p></a>
                }
            </div>
            <div className="heading">Compagnies de Production</div>
            <div className="production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt=""/>
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movie