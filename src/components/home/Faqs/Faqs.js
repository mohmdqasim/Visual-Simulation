import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import './Faqs.scss'
function Faqs() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <React.Fragment>
            <div className="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-right" data-aos-duration="1000">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <p>FAQ</p>
                                <h2>Frequently <br /> Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-md-12" data-aos="fade-left" data-aos-duration="1000">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is VR training?</Accordion.Header>
                                    <Accordion.Body>
                                        This is a training method that uses virtual reality to simulate working environments and risk-free safety, health and environment (EHS) situations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What makes VR training more effective than traditional methods?</Accordion.Header>
                                    <Accordion.Body>
                                        VR enables complete, interactive immersion, improving information retention and risk understanding.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What services does Power AI provide?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Is Power AI suitable for small businesses?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What services does Power AI provide?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Is Power AI suitable for small businesses?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Faqs
