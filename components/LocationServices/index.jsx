import React from "react";
import { Link } from "react-router-dom";
import "./LocationServices.css";

class LocationServices extends React.Component {
  render() {
    const { rectangle, text15, place, locationServices, locationServices2 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="location-services-1 screen">
          <div className="frame-121"></div>
          <div className="overlap-group-15">
            <img className="frame-122" src="/img/frame@2x.svg" />
            <img className="frame-123" src="/img/frame-1@2x.svg" />
            <img className="frame-124" src="/img/frame-87@2x.svg" />
            <div className="rectangle-140"></div>
            <div className="rectangle-141"></div>
            <img className="frame-125" src="/img/frame-119@2x.svg" />
            <div className="rectangle-142"></div>
            <div className="rectangle-143"></div>
            <img className="rectangle-144" src={rectangle} />
            <div className="rectangle-145"></div>
            <div className="rectangle-146"></div>
            <div className="text-15 sfprotext-normal-black-15px">{text15}</div>
            <Link to="/account-settings">
              <div className="place-11 sfprotext-regular-normal-perano-17px">{place}</div>
            </Link>
            <div className="location-services-2 sfprotext-normal-white-17px">{locationServices}</div>
            <div className="location-services-3 sfprotext-regular-normal-black-17px">{locationServices2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationServices;
