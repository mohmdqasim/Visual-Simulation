import React, { useEffect } from 'react';
import "./ServiceBanner.scss";
import AOS from 'aos';


function ServiceBanner() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <React.Fragment>
       <div className="serviceBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bannerContent">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <p>Services</p>
                                <h2>Our Services</h2>
                                <img src="/images/arrow.svg" alt="arrow" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="serviceCards">
            <div className="container">
                <div className="row">
                <div className="col-md-4 mb-3" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/cservice3.svg" alt="a1" />
                            <h3>VR Safety Training</h3>
                        </div>
                            <p data-aos="fade-right" data-aos-duration="1000">Immersive virtual simulations that prepare workers for real-world hazards, enhancing safety and reducing risk on the job site.</p>
                            <img className='arrow' data-aos="fade-right" data-aos-duration="1000" src="/images/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 mb-3" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/cservice1.svg" alt="a1" />
                            <h3>Reduces Risk</h3>
                        </div>
                            <p data-aos="fade-right" data-aos-duration="1000">Our VR Safety Training simulates real-world hazards, preparing workers to handle challenges and minimize accidents on-site.</p>
                            <img className='arrow' data-aos="fade-right" data-aos-duration="1000" src="/images/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 mb-3" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/cservice2.svg" alt="a1" />
                            <h3>Realistic Simulation</h3>
                        </div>
                            <p data-aos="fade-right" data-aos-duration="1000">Our VR Safety Training offers highly realistic simulations that accurately replicate construction site conditions. </p>
                            <img className='arrow' data-aos="fade-right" data-aos-duration="1000" src="/images/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ServiceBanner
