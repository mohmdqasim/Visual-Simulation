import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from './Banner/Banner'
import Footer from '../footer/Footer'
import OurServices from './OurServices/OurServices'
import UsersSaying from './UsersSaying/UsersSaying'
import Faqs from './Faqs/Faqs'
import PowerAi from './PowerAi/PowerAi'
function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <OurServices/>
      <UsersSaying />
      <Faqs />
      <PowerAi />
      <Footer />
    </React.Fragment>
  )
}

export default Home
