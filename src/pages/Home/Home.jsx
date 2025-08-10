import React, { Suspense } from 'react';
import Hero from '../../components/Hero';
import Features from './Features';
import Faqs from './Faqs';
import AnnouncementsAndTips from './AnnouncementsAndTips';
import NutritionQuiz from './NutritionQuiz';
import QuizIntro from './QuizIntro';
import DiscussionIntro from './DiscussionIntro';
import VideoTutorials from './VideoTutorials';




const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <VideoTutorials></VideoTutorials>
          <QuizIntro></QuizIntro>
          <DiscussionIntro></DiscussionIntro>
          <AnnouncementsAndTips></AnnouncementsAndTips>
          <Features></Features>
          <Faqs></Faqs>
        </div>
    );
};

export default Home;