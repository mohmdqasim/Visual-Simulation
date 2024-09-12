import React, { useEffect } from 'react';
import "./ContactUs.scss";
import AOS from 'aos';


function Banner() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <React.Fragment>
       <div className="contactBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bannerContent">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <p>Contact</p>
                                <h2>Contact Us</h2>
                                <img src="/images/arrow.svg" alt="arrow" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Banner
