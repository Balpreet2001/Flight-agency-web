import {AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {TiSocialFacebook} from 'react-icons/ti'
import logo from '../../assets/photos/mainLogo.jpg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings , fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Explore</a>
          </li>

          <li>
            <a href="">Flight Status</a>
          </li>

          <li>
            <a href="">Travel</a>
          </li>

          <li>
            <a href="">Check In</a>
          </li>

          <li>
            <a href="">Manage Your booking</a>
          </li>

          <li>
            <a href=""></a>
          </li>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>

          <li>
            <a href="">How to</a>
          </li>

          <li>
            <a href="">Features</a>
          </li>

          <li>
            <a href="">Baggage</a>
          </li>

          <li>
            <a href="">Route Map</a>
          </li>

          <li>
            <a href="">Our Communities</a>
          </li>

          <li>
            <a href=""></a>
          </li>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Services</span>
          <li>
            <a href="">Chauffer</a>
          </li>

          <li>
            <a href="">our partners</a>
          </li>

          <li>
            <a href="">Destination</a>
          </li>

          <li>
            <a href="">Careers</a>
          </li>

          <li>
            <a href="">Travel Guide</a>
          </li>

          <li>
            <a href="">Our Work</a>
          </li>

          <li>
            <a href=""></a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer