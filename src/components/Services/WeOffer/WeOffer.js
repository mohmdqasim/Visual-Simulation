import React, { useEffect } from 'react'
import './WeOffer.scss'
import AOS from 'aos';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function WeOffer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="weOffer">
                <div className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <span>what we offer</span>
                        <h2>VR Safety Training</h2>
                        <p>Our VR Safety Training program immerses construction workers in realistic, interactive environments that mirror actual job sites.</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={5000}
                        pagination={true}
                        navigation={false}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            1400: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1000: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            600: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='row'>
                               <div className="col-md-6" data-aos="fade-right"
                                data-aos-duration="1000">
                                    <img src="/images/offer.svg" alt="offer" />
                                </div>
                               <div className="col-md-6" data-aos="fade-left"
                                data-aos-duration="1000">
                                    <h2>Experience Safety.
                                    <span>Build with Confidence</span></h2>
                                    <p>Our VR Safety Training provides construction professionals with immersive, hands-on learning experiences that replicate real-world scenarios. By simulating potential hazards and challenges, we empower workers to identify risks, develop critical skills, and make informed decisions in a safe, controlled environment. With our cutting-edge VR technology, you can enhance safety standards, boost productivity, and build with the confidence that your team is fully prepared for any situation.</p>
                                    <Link to="/">Get Started</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                               <div className="col-md-6" data-aos="fade-right"
                                data-aos-duration="1000">
                                    <img src="/images/offer.svg" alt="offer" />
                                </div>
                               <div className="col-md-6" data-aos="fade-left"
                                data-aos-duration="1000">
                                    <h2>Experience Safety.
                                    <span>Build with Confidence</span></h2>
                                    <p>Our VR Safety Training provides construction professionals with immersive, hands-on learning experiences that replicate real-world scenarios. By simulating potential hazards and challenges, we empower workers to identify risks, develop critical skills, and make informed decisions in a safe, controlled environment. With our cutting-edge VR technology, you can enhance safety standards, boost productivity, and build with the confidence that your team is fully prepared for any situation.</p>
                                    <Link to="/">Get Started</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                               <div className="col-md-6" data-aos="fade-right"
                                data-aos-duration="1000">
                                    <img src="/images/offer.svg" alt="offer" />
                                </div>
                               <div className="col-md-6" data-aos="fade-left"
                                data-aos-duration="1000">
                                    <h2>Experience Safety.
                                    <span>Build with Confidence</span></h2>
                                    <p>Our VR Safety Training provides construction professionals with immersive, hands-on learning experiences that replicate real-world scenarios. By simulating potential hazards and challenges, we empower workers to identify risks, develop critical skills, and make informed decisions in a safe, controlled environment. With our cutting-edge VR technology, you can enhance safety standards, boost productivity, and build with the confidence that your team is fully prepared for any situation.</p>
                                    <Link to="/">Get Started</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeOffer
