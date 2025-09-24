import React, { useEffect } from 'react'
import AboutHero from '../components/about/AboutHero'

import { FounderSpotlight } from '../components/about/Founder';
import { OurDifference } from '../components/about/Empowernemt';
import FinalCTA from '../components/about/Values';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>
      <AboutHero/>
      <FounderSpotlight/>
      <OurDifference/>
      <FinalCTA/>
    </div>
  )
}

export default About
