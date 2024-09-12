import React, { useEffect } from 'react'
import './OurStory.scss'
import AOS from 'aos';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function OurStory() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="ourStory">
                <div className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <p>Success Stories</p>
                        <h2>Our clients share their <br />
                        <i>journey</i></h2>
                    </div>
                    <Swiper
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
              <SwiperSlide>
              <div data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="block">
                                <div className="stars">
                                <img src="/images/stars.svg" alt="stars" />
                                </div>
                                <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                                <div className="content">
                                    <img src="/images/user.svg" alt="user" />
                                    <div>
                                    <h3>Dianne Russell</h3>
                                    <p>Senior Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              </SwiperSlide>
              <SwiperSlide>
              <div data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="block">
                                <div className="stars">
                                <img src="/images/stars.svg" alt="stars" />
                                </div>
                                <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                                <div className="content">
                                    <img src="/images/user.svg" alt="user" />
                                    <div>
                                    <h3>Dianne Russell</h3>
                                    <p>Senior Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              </SwiperSlide>
              <SwiperSlide>
              <div data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="block">
                                <div className="stars">
                                <img src="/images/stars.svg" alt="stars" />
                                </div>
                                <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                                <div className="content">
                                    <img src="/images/user.svg" alt="user" />
                                    <div>
                                    <h3>Dianne Russell</h3>
                                    <p>Senior Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              </SwiperSlide>
              <SwiperSlide>
              <div data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="block">
                                <div className="stars">
                                <img src="/images/stars.svg" alt="stars" />
                                </div>
                                <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                                <div className="content">
                                    <img src="/images/user.svg" alt="user" />
                                    <div>
                                    <h3>Dianne Russell</h3>
                                    <p>Senior Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              </SwiperSlide>
      </Swiper>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurStory
