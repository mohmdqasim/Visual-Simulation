import React, { useEffect } from 'react'
import './Achievements.scss'
import AOS from 'aos';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


function Achievements() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="achievements">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={200} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></p>
                                <span>Great People</span>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={148} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={12} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></p>
                                <span>Partners</span>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={1325} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></p>
                                <span>Coffee Cups</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Achievements
