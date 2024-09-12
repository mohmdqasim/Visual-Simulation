import React, { useEffect } from 'react'
import './AboutCompany.scss'
import AOS from 'aos';


function AboutCompany() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="aboutCompany">
        <div className='container'>
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <p>Company</p>
                                <h2>About Company</h2>
                            </div>
            <div className="row">
                <div className="col-md-4 mb-3" data-aos="fade-right"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                            <h3>Our Vision</h3>
                        </div>
                            <p>To revolutionize the construction industry through immersive VR technology. Create the safest, most efficient, and innovative work environments. Empower construction professionals with cutting-edge solutions.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3" data-aos="fade-right"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                            <h3>Our Mission</h3>
                        </div>
                            <p>To enhance construction site safety and productivity by providing cutting-edge VR training and simulation tools. We empower construction professionals to anticipate and mitigate risks, ensuring every worker returns home safely.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3" data-aos="fade-right"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                            <h3>Core Values</h3>
                        </div>
                            <p>We prioritize the well-being of every individual by embedding safety into every aspect of our VR solutions. We continuously push the boundaries of technology, developing state-of-the-art VR tools that lead the industry.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutCompany
