import React from 'react';
import { NavLink } from 'react-router-dom';
import DIDEOS from "../../../img/DIDEOS.png";
import "./footer.css";


const footer = () => {
    return (
        <div className="footer">
            <div className="Left">
                <img className="icon" src={DIDEOS} alt=""/>
                
            </div>
            <div className="Right">
                <NavLink to="/" ><span>Home</span></NavLink>
                <NavLink to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></NavLink>
                <NavLink to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></NavLink>
                <NavLink to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></NavLink>
            </div>
    </div>
    );
};

export default footer;