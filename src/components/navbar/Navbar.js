import React, { useState, useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const isBlogActive = location.pathname.startsWith('/blog');

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
                            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => setNavbar(!navbar)}>
                                <span>Home</span>
                            </NavLink>
                            <NavLink to="/aboutUs" className="nav-link" activeClassName="active" onClick={() => setNavbar(!navbar)}>
                                <span>About Us</span>
                            </NavLink>
                            <NavLink to="/services" className="nav-link" activeClassName="active" onClick={() => setNavbar(!navbar)}>
                                <span>Services</span>
                            </NavLink>
                            <NavLink to="/contactUs" className={`nav-link ${isBlogActive ? 'active' : ''}`} onClick={() => setNavbar(!navbar)}>
                                <span>Contact Us</span>
                            </NavLink>
                            <Link to="/" className={`lap_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                            <button
                                className="booking"
                            >
                                <span>
                                Login
                                </span>
                            </button>
                        </Link> 
                        </Nav>    
                  </BootstrapNavbar.Collapse>
                  <Link to="/" className={`mbl_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                            <button
                                className="booking"
                            >
                                <span>
                                Login
                                </span>
                            </button>
                        </Link> 
                    </div>
                </Container>
            </BootstrapNavbar>
        </React.Fragment>
    );
};

export default Navbar;
