import React from 'react';
import {Routes, Route} from "react-router-dom"
import Layout from '../../pages/Public/Layout.js'
import Home from '../../pages/Public/Home/Home'
import Movie from '../../pages/Public/movie/Movie'
import Display from '../../components/public/displayMovie/Display'
import Error from '../../utils/Error'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="movie/:id" element={<Movie />}/>
            <Route path="movies/:type" element={<Display />}/>
            <Route path="/*" element={<Error />}/>    
               
             </Route>   
            
            
        </Routes>
    );
};

export default PublicRouter;