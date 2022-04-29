import React from "react";
import { Link } from "react-router-dom";
import "./ByLocation.css";

class ByLocation extends React.Component {
  render() {
    const {
      rectangle,
      rectangle2,
      rectangle3,
      text27,
      place,
      byLocation,
      place2,
      search,
      myEvents,
      myTabs,
      vipAccess,
      catalogItemNameOne,
      subtitle,
      catalogItemNameTwo,
      subtitle2,
      catalogItemNameThree,
      subtitle3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="by-location-1 screen">
          <div className="frame-189"></div>
          <div className="overlap-group-23">
            <div className="rectangle-210"></div>
            <img className="frame-190" src="/img/frame-186@2x.svg" />
            <img className="frame-191" src="/img/frame-187@2x.svg" />
            <img className="frame-192" src="/img/frame-178@2x.svg" />
            <div className="rectangle-211"></div>
            <img className="frame-193" src="/img/frame-179@2x.svg" />
            <Link to="/account-settings">
              <img className="frame-194" src="/img/frame-180@2x.svg" />
            </Link>
            <div className="rectangle-212"></div>
            <div className="rectangle-213"></div>
            <div className="rectangle-214"></div>
            <Link to="/discover">
              <img className="frame-195" src="/img/frame-181@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-196" src="/img/frame-96@2x.svg" />
            </Link>
            <img className="frame-197" src="/img/frame-97@2x.svg" />
            <Link to="/my-tabs">
              <img className="frame-198" src="/img/frame-98@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-199" src="/img/frame-99@2x.svg" />
            </Link>
            <div className="rectangle-215"></div>
            <Link to="/venue-information">
              <img className="rectangle-216" src={rectangle} />
            </Link>
            <div className="rectangle-217"></div>
            <Link to="/venue-information">
              <img className="rectangle-218" src={rectangle2} />
            </Link>
            <div className="rectangle-219"></div>
            <Link to="/venue-information">
              <img className="rectangle-220" src={rectangle3} />
            </Link>
            <div className="rectangle-221"></div>
            <div className="text-27 sfprotext-normal-black-15px">{text27}</div>
            <Link to="/discover">
              <div className="place-20 sfprotext-regular-normal-perano-17px">{place}</div>
            </Link>
            <div className="by-location-2 nunito-semi-bold-prim-34px">{byLocation}</div>
            <div className="place-21 sfprotext-medium-mercury-10px">{place2}</div>
            <div className="search-12 sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-events-10 sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs-12 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-12 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <div className="catalog-item-name-one-3 sfprotext-normal-perano-15px">{catalogItemNameOne}</div>
            <div className="subtitle-18 sfprotext-regular-normal-prim-13px">{subtitle}</div>
            <div className="catalog-item-name-two-3 sfprotext-normal-perano-15px">{catalogItemNameTwo}</div>
            <div className="subtitle-19 sfprotext-regular-normal-prim-13px">{subtitle2}</div>
            <div className="catalog-item-name-three-3 sfprotext-normal-perano-15px">{catalogItemNameThree}</div>
            <div className="subtitle-20 sfprotext-regular-normal-prim-13px">{subtitle3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ByLocation;
