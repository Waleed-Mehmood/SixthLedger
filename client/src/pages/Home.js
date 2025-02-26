import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import PartnerSection from '../components/PartnerSection'
import Clients from '../components/Clients'
import Services from '../components/Services'
import OurProcess from '../components/OurProcess'
import OurTeam from '../components/OurTeam'
import Contactsus from '../components/Contactsus'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <Services/>
      <PartnerSection/>
      <Clients/>
      <OurProcess/>
      <OurTeam/>
      <Contactsus/>
    </div>
  )
}

export default Home
