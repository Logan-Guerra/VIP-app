import React from "react";
import { Link } from "react-router-dom";
import "./ByRatingCopy.css";

class ByRatingCopy extends React.Component {
  render() {
    const {
      rectangle,
      rectangle2,
      rectangle3,
      text26,
      place,
      byRating,
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
        <div className="by-rating-copy screen">
          <div className="frame-178"></div>
          <div className="overlap-group-22">
            <div className="rectangle-198"></div>
            <img className="frame-179" src="/img/frame-91@2x.svg" />
            <img className="frame-180" src="/img/frame-92@2x.svg" />
            <img className="frame-181" src="/img/frame-178@2x.svg" />
            <div className="rectangle-199"></div>
            <img className="frame-182" src="/img/frame-179@2x.svg" />
            <Link to="/account-settings">
              <img className="frame-183" src="/img/frame-180@2x.svg" />
            </Link>
            <div className="rectangle-200"></div>
            <div className="rectangle-201"></div>
            <div className="rectangle-202"></div>
            <Link to="/discover">
              <img className="frame-184" src="/img/frame-181@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-185" src="/img/frame-96@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-186" src="/img/frame-97@2x.svg" />
            </Link>
            <Link to="/my-tabs">
              <img className="frame-187" src="/img/frame-98@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-188" src="/img/frame-99@2x.svg" />
            </Link>
            <div className="rectangle-203"></div>
            <Link to="/venue-information">
              <img className="rectangle-204" src={rectangle} />
            </Link>
            <div className="rectangle-205"></div>
            <Link to="/venue-information">
              <img className="rectangle-206" src={rectangle2} />
            </Link>
            <div className="rectangle-207"></div>
            <Link to="/venue-information">
              <img className="rectangle-208" src={rectangle3} />
            </Link>
            <div className="rectangle-209"></div>
            <div className="text-26 sfprotext-normal-black-15px">{text26}</div>
            <Link to="/discover">
              <div className="place-18 sfprotext-regular-normal-perano-17px">{place}</div>
            </Link>
            <div className="by-rating nunito-semi-bold-prim-34px">{byRating}</div>
            <div className="place-19 sfprotext-medium-mercury-10px">{place2}</div>
            <div className="search-11 sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-events-9 sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs-11 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-11 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <div className="catalog-item-name-one-2 sfprotext-normal-black-15px">{catalogItemNameOne}</div>
            <div className="subtitle-15 sfprotext-regular-normal-oslo-gray-13px">{subtitle}</div>
            <div className="catalog-item-name-two-2 sfprotext-normal-black-15px">{catalogItemNameTwo}</div>
            <div className="subtitle-16 sfprotext-regular-normal-oslo-gray-13px">{subtitle2}</div>
            <div className="catalog-item-name-three-2 sfprotext-normal-black-15px">{catalogItemNameThree}</div>
            <div className="subtitle-17 sfprotext-regular-normal-oslo-gray-13px">{subtitle3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ByRatingCopy;
