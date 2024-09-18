import React from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import OurTeam from './OurTeam/OurTeam'
import AboutCompany from './AboutCompany/AboutCompany'
// import Achievements from '../home/Achievements/Achievements'
import PowerAi from '../home/PowerAi/PowerAi'
// import OurStory from './OurStory/OurStory'

function AboutUs() {
  return (
    <React.Fragment>
        <Navbar />
      <AboutBanner />
      {/* <Achievements /> */}
      <AboutCompany />
      <OurTeam />
      {/* <OurStory /> */}
      <PowerAi />
      <Footer />
    </React.Fragment>
  )
}

export default AboutUs
