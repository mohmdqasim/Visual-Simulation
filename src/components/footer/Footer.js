import React,{useEffect , useState} from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="fade-right"
    data-aos-duration="1000">
                    <Link href="/"><img className='logo' src="/images/logo.svg" alt="logo" /></Link>
                    <p>We understand that injuries and acute
                        pain can happen unexpectedly. Our
                        emergency physiotherapy.</p>
                      <div className="social">
                        <Link to=""><img src="/images/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6" data-aos="fade-down"
    data-aos-duration="1000">
                    <div className="links">
                        <h4>Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Service</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-down"
    data-aos-duration="1000">
                    <div className="links">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="tel:+ (123) 456 7890"><img src="/images/phone.svg" alt="icon" /> + (123) 456 7890</a></li>
                            <li><a href="mailto:info@gmail.com"><img src="/images/mailt.svg" alt="icon" /> info@gmail.com</a></li>
                            <li><Link to=""><img src="/images/loca.svg" alt="icon" /> 24/11 Robert Road,New York,USA</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-left"
    data-aos-duration="1000">
                <div className="links">
                        <h4>Join our Newsletter</h4>
                        <div className="formGroup">
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                            <button>Subscribe</button>
                        </div>
                       <p>We will send you weekly updates for your better Product management.</p>
                    </div>
                </div>
            </div>
            <div className="copRight">
                <p>Copyright 2024 VR SAFETY. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Footer
