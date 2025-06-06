import React, { Suspense } from 'react';
import Hero from '../../components/Hero';
import Features from './Features';
import Faqs from './Faqs';



const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Features></Features>
          <Faqs></Faqs>
        </div>
    );
};

export default Home;