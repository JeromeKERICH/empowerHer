import React, { useEffect } from 'react'
import HeroSection from '../components/home/Hero'
import OurStory from '../components/home/About';
import HowItWorks from '../components/home/Process';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>
      <HeroSection/>
      <OurStory/>
      <HowItWorks/>
    </div>
  )
}

export default Home
