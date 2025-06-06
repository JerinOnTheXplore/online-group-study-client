import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
 useEffect(() =>{
      AOS.init({
        duration:800,
       
      })
    },[]);
    return (
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>   
        </div>
    );
};

export default MainLayout;