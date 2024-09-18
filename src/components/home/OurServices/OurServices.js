import React,{useEffect} from 'react'
import './OurServices.scss'
import AOS from 'aos';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function OurServices() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
      <div className="ourServices">
        <div className='container'>
                <div className="title" data-aos="fade-up"
                data-aos-duration="1000">
                    <p>our services</p>
                    <h2>Effortlessly enhance your
                    customer support</h2>
                </div>
            <div className="row">
                <div className="col-md-4 mb-5 mb-md-3" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/service1.svg" alt="a1" />
                            <h3>An immersive <br />
                            experience</h3>
                        </div>
                            <p>Immerse yourself completely in a virtual work environment designed to simulate real-life company situations.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-5 mb-md-3" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/service2.svg" alt="a2" />
                            <h3>Protect your employees’ <br />
                            health</h3>
                        </div>
                            <p>Our virtual reality training courses allow you to confront your employees with real risks in a controlled environment</p>
                    </div>
                </div>
                <div className="col-md-4" data-aos="fade-up"
                data-aos-duration="1000">
                    <div className="block">
                        <div className="content">
                        <img src="/images/service3.svg" alt="a3" />
                            <h3>Experience risk as if you <br />
                            were there</h3>
                        </div>
                            <p>Virtual reality training faithfully recreates risks and hazardous situations in the workplace</p>
                    </div>
                </div>
            </div>
      {/* <Swiper
            slidesPerView={6}
            spaceBetween={10}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={5000}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              1400: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {[...Array(20).keys()].map((index) => (
              <SwiperSlide key={index}>
                <div className="imgBlock">
                  <img src={`/images/slider${(index % 6) + 1}.svg`} alt="sliderImg" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurServices
