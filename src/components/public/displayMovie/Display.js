import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import "./display.css";





const Display = () => {

    const [movieList, setDisplay] = useState([])
    const {type} = useParams()

    useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=0a7b2064d3bc836ce685d7d25138cf1d&language=fr-FR`)
            .then(res => res.json())
            .then(data => setDisplay(data.results))
            
            }
            
        getData()
    }, [type])

    

   

    return (
        <div className="list">
            <h2 className="title">{(type ? type : "Populaire").toUpperCase()}</h2>
            <div className="cards">
                {
                    movieList.map(movies => (
                        <Card movie={movies} />
                    ))
                }
            </div>
            <h2 className="title">{(type ? type : "top rated").toUpperCase()}</h2>
            <div className="cards">
                {
                    movieList.map(movies => (
                        <Card movie={movies} />
                    ))
                }
            </div>
            <h2 className="title">{(type ? type : "Upcoming").toUpperCase()}</h2>
            <div className="cards">
                {
                    movieList.map(movies => (
                        <Card movie={movies} />
                    ))
                }
            </div>
        </div>
    );
};

export default Display;