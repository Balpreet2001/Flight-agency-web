import video from "../../assets/videos/takeoffBgvideo2.mp4";
import take from '../../assets/photos/takeoff2.png'

import { useRef, useEffect} from 'react'
const Home = () => {

     const vidRef = useRef();

     useEffect(() => {
       vidRef.current.play();
     }, []);
return(
     <div className="home flex container">
          <div className="mainText">
               <h1>Come create ever lasting memories with us</h1>
          </div>

          <div className="homeImages flex">
               <div className="videoDiv">
                    <video src={video} loop muted autoPlay={true} ref={vidRef} controls='' className="video"></video>
               </div>

               <img src={take} alt="takeoff2" className="plane"></img>

          </div>
     </div>
)
}

export default Home