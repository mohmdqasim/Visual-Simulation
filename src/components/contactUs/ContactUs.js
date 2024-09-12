import React from 'react'
import Banner from './Banner'
import ContactForm from './ContactForm'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PowerAi from '../home/PowerAi/PowerAi'

function Pricing() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='boxLine1'>
      <Banner />
      <ContactForm />
      </div>
      <PowerAi />
     <Footer />
    </React.Fragment>
  )
}

export default Pricing
