import React, { useEffect } from 'react'
import './Banner.scss'
import AOS from 'aos';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="banner">
        <div className="container">
         <div className="title">
          <h2>Elevate Your</h2>
          <h2>Safety Training <img src="/images/bannerVr.svg" alt="bannerVr" /></h2>
          <h2>VR SAFETY</h2>
          <p>Experience realistic fall protection training in a risk-free virtual environment designed to keep construction workers safe on the job</p>
         </div>
        </div>
      </div>
      <video autoPlay muted loop id="myVideo">
        <source src="images/bannerVideoVr.mp4" type="video/mp4" />
      </video>
    </React.Fragment>
  )
}

export default Banner
