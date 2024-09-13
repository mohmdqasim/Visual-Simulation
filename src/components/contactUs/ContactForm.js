import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number separately to allow only numeric input
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
      formIsValid = false;
    } 

    if (!formData.subject) {
      errors.subject = 'Subject is required';
      formIsValid = false;
    }

    if (!formData.message) {
      errors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data submitted:', formData);

      // Clear the form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Set submission message
      setSubmissionMessage('Your message has been sent successfully.');

      // Clear the submission message after 5 seconds
      setTimeout(() => {
        setSubmissionMessage('');
      }, 5000);
    }
  };

  useEffect(() => {
    AOS.init();

    if (location.hash === '#contactForm') {
      const headerOffset = 80;
      const formElement = document.getElementById('contactForm');

      if (formElement) {
        const formPosition = formElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: formPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <React.Fragment>
      <div className="contactForm" id='contactForm'>
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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <h4>Fill the Form Below</h4>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your Phone"
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter Subject"
                        />
                        {errors.subject && <p className="error">{errors.subject}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Enter Your Message"
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="map" data-aos="fade-up" data-aos-duration="1000">
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13386.547743580772!2d-96.6140914!3d32.9869793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1c846a181d41%3A0xe1167132cabc18bd!2sHeptic!5e0!3m2!1sen!2s!4v1720706595842!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
