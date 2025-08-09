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
         <div className="flex flex-col sm:flex-row ml-12 lg:ml-24">
  {/* Main content area */}
  <div className="flex-1 p-1 sm:p-2 md:p-4">
    <Outlet />
    <Footer></Footer>  
  </div>  

  {/* Dashboard sidebar */}
  <div className="hidden sm:block sm:w-[200px] md:w-[200px] lg:w-[300px] bg-yellow-50 border-l border-gray-200 lg:mr-5">
    {/* Dashboard content here */}
  </div>
</div> 
        </div>
    );
};

export default MainLayout;