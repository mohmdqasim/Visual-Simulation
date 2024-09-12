import React, { useEffect } from 'react';
import './UsersSaying.scss';
import AOS from 'aos';
import { Link } from 'react-router-dom';

function UsersSaying() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="usersSaying">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <p>Our Training</p>
            <h2>What we offer</h2>
          </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="block" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/offer1.svg" alt="offer" />
                <div className="overlay">
                  <p>Hazard Identification</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
            <div className="block" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/offer2.svg" alt="offer" />
                <div className="overlay">
                  <p>Office Hazard</p>
                </div>
              </div>
            </div>
            <div className="line" >
              <img src="/images/offerLine.svg" alt="offerLine" />
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
            <div className="block" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/offer3.svg" alt="offer" />
                <div className="overlay">
                  <p>Working Around Forklifts</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
            <div className="block" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/offer4.svg" alt="offer" />
                <div className="overlay">
                  <p>Slips, Trips & Falls</p>
                </div>
              </div>
            </div>
          </div> 
          <div className="viewAll">
          <Link to="/">View All</Link>  
          </div>       
        </div>
      </div>
    </React.Fragment>
  );
}

export default UsersSaying;
