import { useState } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import { BiSolidPlaneAlt } from "react-icons/bi";


const Navbar = () => {

  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () =>{
    if(active == 'navBarMenu'){
      setActive("navBarMenu showNavBar");
    } else {
      setActive('navBarMenu')
    }
  }

  const [noBg, setBg] = useState("navBarTwo");
  const addBgColor = () => {
    if(window.scrollY >=10){
      setBg("navBarTwo navbar_with_Bg");
    } else{
      setBg("navBarTwo");
    }
  };

   window.addEventListener("scroll", addBgColor);

    return (
      <div className="navBar flex">
        <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
        </div>
        <div className={noBg}>
          <div className="logoDiv">
            <BiSolidPlaneAlt className='icon'/>
          </div>

          <div className={active}>
            <ul className="menu flex">
              <li className="listItem">
                Home
              </li>
              <li className="listItem">
                About
              </li>
              <li className="listItem">
                Offers
              </li>
              <li className="listItem">
                Seats
              </li>
              <li className="listItem">
                Destinations
              </li>
            </ul>
            <button  className="btn flex btnOne">
              Contact
            </button>
          </div>
          <button className="btn flex btnTwo">Contact</button>
          <div onClick={showNavBar} className="toggleIcon">
            <CgMenuGridO className="icon" />
          </div>
        </div>
      </div>
    );
}

export default Navbar