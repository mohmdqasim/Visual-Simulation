import React, { lazy, Suspense,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";

const Home = lazy(() => import("./components/home/Home"));
const Config = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
