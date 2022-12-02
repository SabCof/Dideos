import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/public/header/Header';
import Footer from '../../components/public/footer/Footer';


const Layout = () => {
    return (
        <div>
            <Header /> 

           

            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout; 