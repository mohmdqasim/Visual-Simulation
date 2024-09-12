import React from 'react'
import './AboutBanner.scss'
function AboutBanner() {
    return (
        <React.Fragment>
            <div className="aboutBanner">
            <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="bannerContent">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <span>About</span>
                                <h2>About Us</h2>
                                <p>We are a pioneering company at the intersection of construction and virtual reality, dedicated to transforming how safety is approached on construction sites. Our mission is to harness the power of immersive VR technology to provide innovative training and simulation tools that significantly reduce risks and enhance productivity in the construction industry.</p>
                                <p>With a deep understanding of the challenges faced by construction professionals, we design VR solutions that replicate real-world scenarios, allowing workers to experience and prepare for potential hazards in a controlled, risk-free environment. Our cutting-edge technology equips teams with the skills and confidence needed to navigate complex projects safely and efficiently.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aboutImg">
                                <img src="/images/aboutBanner.svg" alt="aboutImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutBanner
