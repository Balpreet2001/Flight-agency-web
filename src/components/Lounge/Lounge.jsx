import img1 from "../../assets/photos/loungepic1.jpg";
import img2 from "../../assets/photos/loungepic2.jpg";
const Lounge = () => {
  return (
    <div className="lounge Container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={img1} alt="" className="img1" />
          <img src={img2} alt="" className="img2" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">chauffer-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
