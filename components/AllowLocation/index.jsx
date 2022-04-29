import React from "react";
import { Link } from "react-router-dom";
import "./AllowLocation.css";

class AllowLocation extends React.Component {
  render() {
    const { rectangle, text3, later, location, place, yes, allowLocationAccess, weWillNeedToAcce } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="allow-location screen">
          <div className="frame-18"></div>
          <div className="overlap-group-2">
            <img className="frame-19" src="/img/frame@2x.svg" />
            <img className="frame-20" src="/img/frame-1@2x.svg" />
            <img className="frame-21" src="/img/frame-2@2x.svg" />
            <img className="rectangle-33" src={rectangle} />
            <div className="rectangle-34"></div>
            <div className="rectangle-35"></div>
            <div className="rectangle-36"></div>
            <div className="rectangle-37"></div>
            <Link to="/walkthrough-device">
              <img className="rectangle-38" src="/img/rectangle-1@2x.svg" />
            </Link>
            <img className="frame-22" src="/img/frame-19@2x.svg" />
            <div className="rectangle-39"></div>
            <div className="text-3 sfprotext-normal-black-15px">{text3}</div>
            <div className="later sfprotext-regular-normal-azure-radiance-17px">{later}</div>
            <div className="location sfprotext-normal-prim-17px">{location}</div>
            <div className="place-2 sfprotext-normal-black-15px">{place}</div>
            <div className="yes sfprotext-normal-white-15px">{yes}</div>
            <div className="allow-location-access sfprodisplay-bold-prim-20px">{allowLocationAccess}</div>
            <p className="we-will-need-to-acce sfprotext-regular-normal-prim-15px">{weWillNeedToAcce}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AllowLocation;
