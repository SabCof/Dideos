import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import DIDEOS from "../../../img/DIDEOS.png";

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
            <img className="icon" src={DIDEOS} alt=""/>
            <NavLink to="/" ><span className='link'>Home</span></NavLink>
            <NavLink to="/movies/popular" style={{textDecoration: "none"}}><span className='link'>Popular</span></NavLink>
            <NavLink to="/movies/top_rated" style={{textDecoration: "none"}}><span className='link'>Top Rated</span></NavLink>
            <NavLink to="/movies/upcoming" style={{textDecoration: "none"}}><span className='link'>Upcoming</span></NavLink>
            </div>
        </div>
    )
};

export default Header;