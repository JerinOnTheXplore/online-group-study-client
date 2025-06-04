import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>   
        </div>
    );
};

export default MainLayout;