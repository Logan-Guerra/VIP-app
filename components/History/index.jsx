import React from "react";
import { Link } from "react-router-dom";
import "./History.css";

class History extends React.Component {
  render() {
    const {
      rectangle,
      rectangle2,
      rectangle3,
      text12,
      place,
      history,
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
        <div className="history-1 screen">
          <div className="frame-96"></div>
          <div className="overlap-group-11">
            <div className="rectangle-118"></div>
            <img className="frame-97" src="/img/frame-91@2x.svg" />
            <img className="frame-98" src="/img/frame-92@2x.svg" />
            <img className="frame-99" src="/img/frame-93@2x.svg" />
            <div className="rectangle-119"></div>
            <img className="frame-100" src="/img/frame-94@2x.svg" />
            <div className="rectangle-120"></div>
            <div className="rectangle-121"></div>
            <div className="rectangle-122"></div>
            <Link to="/discover">
              <img className="frame-101" src="/img/frame-95@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-102" src="/img/frame-96@2x.svg" />
            </Link>
            <Link to="/my-events">
              <img className="frame-103" src="/img/frame-97@2x.svg" />
            </Link>
            <Link to="/my-tabs">
              <img className="frame-104" src="/img/frame-98@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-105" src="/img/frame-99@2x.svg" />
            </Link>
            <div className="rectangle-123"></div>
            <Link to="/venue-information">
              <img className="rectangle-124" src={rectangle} />
            </Link>
            <div className="rectangle-125"></div>
            <Link to="/venue-information">
              <img className="rectangle-126" src={rectangle2} />
            </Link>
            <div className="rectangle-127"></div>
            <Link to="/venue-information">
              <img className="rectangle-128" src={rectangle3} />
            </Link>
            <div className="rectangle-129"></div>
            <div className="text-12 sfprotext-normal-black-15px">{text12}</div>
            <div className="place-9 sfprotext-regular-normal-perano-17px">{place}</div>
            <div className="history-2 nunito-semi-bold-prim-34px">{history}</div>
            <div className="place-10 sfprotext-medium-mercury-10px">{place2}</div>
            <Link to="/search">
              <div className="search-8 sfprotext-medium-mercury-10px">{search}</div>
            </Link>
            <div className="my-events-6 sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs-8 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-8 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <div className="catalog-item-name-one-1 sfprotext-normal-perano-15px">{catalogItemNameOne}</div>
            <div className="subtitle-12 sfprotext-regular-normal-prim-13px">{subtitle}</div>
            <div className="catalog-item-name-two-1 sfprotext-normal-perano-15px">{catalogItemNameTwo}</div>
            <div className="subtitle-13 sfprotext-regular-normal-prim-13px">{subtitle2}</div>
            <div className="catalog-item-name-three-1 sfprotext-normal-perano-15px">{catalogItemNameThree}</div>
            <div className="subtitle-14 sfprotext-regular-normal-prim-13px">{subtitle3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
