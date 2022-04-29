import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

class Search extends React.Component {
  render() {
    const {
      rectangle1,
      rectangle,
      rectangle2,
      rectangle3,
      rectangle4,
      inputType,
      inputPlaceholder,
      place,
      search,
      myEvent,
      myTabs,
      vipAccess,
      catalogItemNameOne,
      subtitle,
      catalogItemNameTwo,
      subtitle2,
      catalogItemNameThree,
      subtitle3,
      searchVenues,
      text4,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="search-1 screen">
          <div className="frame-23"></div>
          <div className="overlap-group-3">
            <div className="rectangle-40"></div>
            <img className="rectangle-1-1" src={rectangle1} />
            <img className="frame-24" src="/img/frame-20@2x.svg" />
            <img className="frame-25" src="/img/frame-21@2x.svg" />
            <img className="frame-26" src="/img/frame-22@2x.svg" />
            <Link to="/account-settings">
              <img className="frame-27" src="/img/frame-23@2x.svg" />
            </Link>
            <div className="rectangle-41"></div>
            <img className="rectangle-42" src={rectangle} />
            <img className="frame-28" src="/img/frame-24@2x.svg" />
            <div className="rectangle-43"></div>
            <div className="rectangle-44"></div>
            <Link to="/discover">
              <img className="frame-29" src="/img/frame-25@2x.svg" />
            </Link>
            <img className="frame-30" src="/img/frame-26@2x.svg" />
            <Link to="/my-events">
              <img className="frame-31" src="/img/frame-27@2x.svg" />
            </Link>
            <Link to="/my-tabs">
              <img className="frame-32" src="/img/frame-28@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-33" src="/img/frame-29@2x.svg" />
            </Link>
            <div className="rectangle-45"></div>
            <Link to="/venue-information">
              <img className="rectangle-46" src={rectangle2} />
            </Link>
            <div className="rectangle-47"></div>
            <Link to="/venue-information">
              <img className="rectangle-48" src={rectangle3} />
            </Link>
            <div className="rectangle-49"></div>
            <Link to="/venue-information">
              <img className="rectangle-50" src={rectangle4} />
            </Link>
            <div className="rectangle-51"></div>
            <input className="search-2" name="search" placeholder={inputPlaceholder} type={inputType} />
            <div className="place-3 sfprotext-medium-mercury-10px">{place}</div>
            <div className="search-3 sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-event sfprotext-medium-mercury-10px">{myEvent}</div>
            <div className="my-tabs-1 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-1 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <div className="catalog-item-name-one sfprotext-normal-perano-15px">{catalogItemNameOne}</div>
            <div className="subtitle-7 sfprotext-regular-normal-blue-chalk-13px">{subtitle}</div>
            <div className="catalog-item-name-two sfprotext-normal-perano-15px">{catalogItemNameTwo}</div>
            <div className="subtitle-8 sfprotext-regular-normal-blue-chalk-13px">{subtitle2}</div>
            <div className="catalog-item-name-three sfprotext-normal-perano-15px">{catalogItemNameThree}</div>
            <div className="subtitle-9 sfprotext-regular-normal-blue-chalk-13px">{subtitle3}</div>
            <div className="search-venues nunito-semi-bold-prim-34px">{searchVenues}</div>
            <div className="text-4 sfprotext-normal-black-15px">{text4}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
