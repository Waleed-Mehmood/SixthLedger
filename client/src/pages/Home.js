import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import PartnerSection from '../components/PartnerSection'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <PartnerSection/>
      <Clients/>
    </div>
  )
}

export default Home
