import '../../assets/css/navbar.css';
// import LogoMain from '../../assets/logos/logo-main.png';
// import { Link } from 'react-router-dom';
import BannerPhoto from '../../assets/images/Police.png';

const Banner = () => {
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  return (
    <div className='banner-main' id='home'>
      <div className='banner-main-inner'>
        <div className='banner-left'>
          <div className='main-heading'>
          <span className="hellospanner">Securely</span> tracking every move with <span className="hellospanner">NFC-based</span> police personnel monitoring
          </div>
          <div className='sub-heading'>
          Aarakshak is a Near Field Communication-based solution, 
          which can be used for securely tracking and authenticating 
          police personnel on ground duty in real time.
          </div>

          <div className='button-banner-cont'>
            <a href={`${URL}/#about`}>
              <button className='button-banner'>
                Read More &nbsp;<i class='fa-solid fa-circle-chevron-down'></i>
              </button>
            </a>
            <a href={`${URL}/#contact`}>
              <button className='button-banner'>
                Contact Us &nbsp;<i class='fa-solid fa-message'></i>
              </button>
            </a>
          </div>
        </div>
        <div className='banner-right'>
          <img className='banner-photo' src={BannerPhoto} style={{borderRadius:20}}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
