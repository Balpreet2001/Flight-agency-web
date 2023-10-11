import parisT from '../../assets/photos/Guyparis.jpg';
import parisP from '../../assets/photos/guyP.jpg';

import tokyoT from '../../assets/photos/tokyoT.jpg';
import tokyoP from '../../assets/photos/tokyoP.png';

import newYorkT from "../../assets/photos/newYorkT.jpg";
import newYorkP from "../../assets/photos/newYorkP.jpg";

import dubaiT from "../../assets/photos/dubaiT.jpg";
import dubaiP from "../../assets/photos/dubaiP.jpg";
const travelers = [
  {
    id: 1,
    destinationImage: parisT,
    travelerImage: parisP,
    travelerName: "Benjamin Singh",
    socialLink: "@benjaminS",
  },
  {
    id: 2,
    destinationImage: tokyoT,
    travelerImage: tokyoP,
    travelerName: "Lukas Yadav",
    socialLink: "@LukaY",
  },
  {
    id: 3,
    destinationImage: newYorkT,
    travelerImage: newYorkP,
    travelerName: "jasmine k",
    socialLink: "@jasK",
  },
  {
    id: 4,
    destinationImage: dubaiT,
    travelerImage: dubaiP,
    travelerName: "natasha S",
    socialLink: "@natsS",
  },
];
const Travelers = () => {
  return (
    <div className="travelers contianer section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {
          travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Travelers