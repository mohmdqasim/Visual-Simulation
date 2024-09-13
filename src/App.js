import React, { lazy, Suspense, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Home = lazy(() => import("./components/home/Home"));
const ContactUs = lazy(() => import("./components/contactUs/ContactUs"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Services = lazy(() => import("./components/Services/Services"));

const Loading = () => <div className="loading-spinner" style={{color:'white;',fontSize:'50px;'}}>Loading...</div>;

const Config = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
