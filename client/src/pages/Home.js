import React from 'react'
import HeroSection from './HeroSection'
import OurProcess from './OurProcess'
import OurTeam from './OurTeam'
import Contactsus from './Contactsus'
import Services from './Services'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services/>
      <OurProcess/>
      <OurTeam/>
      <Contactsus/>
    </div>
  )
}

export default Home
