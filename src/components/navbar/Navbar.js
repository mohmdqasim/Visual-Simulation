import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <BootstrapNavbar
                className={`${scrolling ? "scrolling" : ""}`}
                expand="lg"
                fixed="top"
            >
                <Container>
                    <BootstrapNavbar.Brand href="/">
                        <img src="/images/logo.svg" alt="logo" width="100px" height="auto" />
                    </BootstrapNavbar.Brand>
                    <div className="navbarMenu">
                        <BootstrapNavbar.Toggle className="customToggle" onClick={() => setNavbar(!navbar)} />
                        <BootstrapNavbar.Collapse>
                            <Nav className="ml-auto">
                                <BootstrapNavbar.Toggle className="cross" onClick={() => setNavbar(!navbar)} />
                                
                                <NavLink
                                    exact
                                    to="/"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <span>Home</span>
                                </NavLink>
                                <NavLink
                                    to="/aboutUs"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <span>About Us</span>
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <span>Services</span>
                                </NavLink>
                                <NavLink
                                    to="/contactUs"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <span>Contact Us</span>
                                </NavLink>
                                <Link to="https://app.vr-vss.com/" className={`lap_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                                    <button className="booking">
                                        <span>Login</span>
                                    </button>
                                </Link>
                            </Nav>
                        </BootstrapNavbar.Collapse>
                        <Link to="https://app.vr-vss.com/" className={`mbl_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                            <button className="booking">
                                <span>Login</span>
                            </button>
                        </Link>
                    </div>
                </Container>
            </BootstrapNavbar>
        </React.Fragment>
    );
};

export default Navbar;
