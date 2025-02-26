import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import PartnerSection from '../components/PartnerSection';
import Clients from '../components/Clients';
import Services from '../components/Services';
import OurProcess from '../components/OurProcess';
import OurTeam from '../components/OurTeam';
import Contactsus from '../components/Contactsus';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="partner">
        <PartnerSection />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="process">
        <OurProcess />
      </div>
      <div id="team">
        <OurTeam />
      </div>
      <div id="contact">
        <Contactsus />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
