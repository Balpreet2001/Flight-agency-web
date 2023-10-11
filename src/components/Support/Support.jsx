import Pic1 from '../../assets/photos/supportPic1.jpg'
import Pic2 from "../../assets/photos/supportPic2.jpg";
import Pic3 from "../../assets/photos/supportPic3.jpg";
const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plan, see what to expect along
                the journey to your destination
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffer at your service when you arrive</h4>
              <p>
                Find help with booking and travel plan, see what to expect along
                the journey to your destination
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travelle insurance </h4>
              <p>
                Find help with booking and travel plan, see what to expect along
                the journey to your destination
              </p>
            </div>
          </div>
          <div className="imgDiv flex">
            <img src={Pic1} className='picPos1'/>
            <img src={Pic2} />
            <img src={Pic3} className='picPos'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support