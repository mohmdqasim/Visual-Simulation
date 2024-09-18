import React, { useEffect } from 'react'
import './OurTeam.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';


function OurTeam() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="ourTeam">
        <div className='container'>
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <p>Core Members</p>
            <h2>Meet Our Team</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="mainBlock">
                <div className="wrapImg">
                <img src="/images/ceo.jpg" alt="a1" />
                <div className="description">
                  <h3>Keith Wong Siu Kei</h3>
                  <p>Keith Wong Siu Kei, CEO of Virtu-Simulation Safety Company, brings over 25 years of expertise in the Health and Safety (H&S) industry, with a strong focus on high-risk sectors such as manufacturing, oil and gas, transportation, and warehousing. Holding a Diploma in Management, a Professional Diploma in Occupational Health and Safety, and a Bachelor’s degree in Human Resources Management, Keith is dedicated to revolutionizing safety training through cutting-edge virtual and augmented reality technology. His certifications in Occupational First Aid, CPR, and "Safe System of Work" further demonstrate his commitment to workplace safety. At Virtu-Simulation, Keith leads the strategic direction and product development, delivering innovative solutions that help organizations comply with regulations and reduce workplace hazards across Asia and North America.</p>
                </div>
                </div>
                <div className="wrap">
                <div className="content">
                  <h3>Keith Wong Siu Kei</h3>
                  <span>Chief Executive Officer</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="mainBlock">
              <div className="wrapImg">
                <img src="/images/team3.svg" alt="a1" />
                <div className="description">
                  <h3>Alex Sheverdin</h3>
                  <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                </div>
                </div>
                <div className="wrap">
                <div className="content">
                  <h3>Alex Sheverdin</h3>
                  <span>C.O.O., SVP Instructor Led Training</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/team2.svg" alt="a1" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>Co-Founder, Senior Consultant</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/team4.svg" alt="a2" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>SVP of VR & Online Learning</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/team5.svg" alt="a3" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>Senior Consultant</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurTeam
