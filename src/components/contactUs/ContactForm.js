import React, { useEffect } from 'react'
import AOS from 'aos';
import './ContactUs.scss'
function ContactForm() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <React.Fragment>
            <div className="contactForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contactFormLeft">
                                <h2>Get in Touch</h2>
                                <p>
                                    Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nibh sit amet commodo nulla facilisi.
                                </p>
                                <div className="contactFormLeftContent">
                                    <div className="block" data-aos="fade-left" data-aos-duration="1000">
                                        <img src="/images/contactIcon1.svg" alt="contactIcon" />
                                        <div className="content">
                                            <h4>Call Us</h4>
                                            <p>
                                                <a href="tel:1234567890">
                                                    123-456-7890
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block" data-aos="fade-left" data-aos-duration="1000">
                                        <img src="/images/contactIcon2.svg" alt="contactIcon" />
                                        <div className="content">
                                            <h4>Mail Us</h4>
                                            <p>
                                                <a href="mailto:info@harity.com">
                                                    info@harity.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block" data-aos="fade-left" data-aos-duration="1000">
                                        <img src="/images/contactIcon3.svg" alt="contactIcon" />
                                        <div className="content">
                                            <h4>Visit Us</h4>
                                            <p>3891 Ranchview Dr. Richardson, California 62639</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="formData">
                                <form>
                                    <div className="row">
                                        <h4>Fill the Form Below</h4>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="phone" className="form-control" placeholder="Your Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input type="text" className="form-control" placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea className="form-control" placeholder="Enter Your Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="map" data-aos="fade-up"
            data-aos-duration="1000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13386.547743580772!2d-96.6140914!3d32.9869793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1c846a181d41%3A0xe1167132cabc18bd!2sHeptic!5e0!3m2!1sen!2s!4v1720706595842!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

            </div>
        </React.Fragment>
    )
}

export default ContactForm
