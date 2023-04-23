import React, { useEffect } from 'react';
import '../../assets/css/about.css';
// import LogoMain from '../../assets/logos/logo-main.png';
import logoabt1 from '../../assets/images/logoabt1.png';
import logoabt2 from '../../assets/images/logoabt2.png';
import logoabt3 from '../../assets/images/logoabt3.png';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <div className='hello-about' id='about'></div>
      <div className='about-main'>
        <div className='about-inner row'>
          <div className='abouter about-1 col-sm-4' data-aos='zoom-in-right'>
            <div className='about-photo'>
              <img src={logoabt1} className='about-img'></img>
            </div>
            <div className='about-text'>
              <h2>Real-time location tracking</h2>
              <p>
              Aarakshak would track the location of police 
              officers in real-time, allowing supervisors 
              to monitor their whereabouts and respond quickly 
              to emergencies.
              </p>
            </div>
          </div>

          <div className='abouter about-2 col-sm-4' data-aos='zoom-in-down'>
            <div className='about-photo'>
              <img src={logoabt2} className='about-img'></img>
            </div>
            <div className='about-text'>
              <h2>Authentication and access control</h2>
              <p className='p1'>
              The NFC solution would ensure that only 
              authorized personnel have access to sensitive 
              areas or data by requiring officers to authenticate 
              themselves before accessing certain resources.
              </p>
            </div>
          </div>

          <div className='abouter about-3 col-sm-4' data-aos='zoom-in-left'>
            <div className='about-photo'>
              <img src={logoabt3} className='about-img'></img>
            </div>
            <div className='about-text'>
              <h2>Data encryption</h2>
              <p>
              All communications between the officer 
              and the supervisor would be encrypted to protect 
              against unauthorized access
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
