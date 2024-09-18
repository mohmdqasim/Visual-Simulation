import React from 'react'
import ServiceBanner from './ServiceBanner/ServiceBanner'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PowerAi from '../home/PowerAi/PowerAi'
import WeOffer from './WeOffer/WeOffer'
// import OurStory from '../AboutUs/OurStory/OurStory'
function Services() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='boxLine'>
      <ServiceBanner />
      </div>
      <WeOffer />
      {/* <OurStory /> */}
      <PowerAi />
     <Footer />
    </React.Fragment>
  )
}

export default Services
