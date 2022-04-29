import React from "react";
import { Link } from "react-router-dom";
import "./MyTabs.css";

class MyTabs extends React.Component {
  render() {
    const {
      text7,
      myTabs,
      barSelectedBasedOnLocation,
      inputType,
      inputPlaceholder,
      myOrder,
      label,
      label2,
      label3,
      label4,
      closeTab,
      place,
      search,
      myEvents,
      myTabs2,
      vipAccess,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="my-tabs-3 screen">
          <div className="frame-49"></div>
          <div className="overlap-group-6">
            <div className="overlap-group8">
              <img className="frame-50" src="/img/frame-44@2x.svg" />
              <img className="frame-51" src="/img/frame-31@2x.svg" />
              <img className="frame-52" src="/img/frame-46@2x.svg" />
              <div className="rectangle-60"></div>
              <div className="rectangle-61"></div>
              <div className="text-7 sfprotext-normal-black-15px">{text7}</div>
              <div className="my-tabs-4 nunito-semi-bold-prim-34px">{myTabs}</div>
            </div>
            <div className="overlap-group2-3">
              <div className="bar-selected-based-on-location sfprotext-regular-normal-black-17px">
                {barSelectedBasedOnLocation}
              </div>
            </div>
            <div className="overlap-group9">
              <img className="frame-53" src="/img/frame-52@2x.svg" />
              <input
                className="search-drinks sfprotext-regular-normal-suva-gray-17px"
                name="searchdrinks"
                placeholder={inputPlaceholder}
                type={inputType}
              />
            </div>
            <div className="my-order sfprotext-regular-normal-prim-17px">{myOrder}</div>
            <div className="overlap-group7 sfprotext-regular-normal-suva-gray-17px">
              <div className="rectangle-62"></div>
              <div className="rectangle-63"></div>
              <div className="label">{label}</div>
              <div className="label">{label2}</div>
            </div>
            <div className="overlap-group5">
              <div className="label-1 sfprotext-regular-normal-suva-gray-17px">{label3}</div>
              <div className="rectangle-64"></div>
            </div>
            <div className="overlap-group4">
              <div className="label-2 sfprotext-regular-normal-suva-gray-17px">{label4}</div>
              <div className="rectangle-65"></div>
            </div>
            <div className="overlap-group3-2">
              <img className="generate-contactless-order" src="/img/generate-contactless-order@2x.svg" />
            </div>
            <div className="overlap-group6">
              <Link to="/review-tab">
                <img className="rectangle-66" src="/img/rectangle-5@2x.svg" />
              </Link>
              <div className="close-tab sfprotext-normal-white-15px">{closeTab}</div>
            </div>
            <div className="overlap-group1-3">
              <div className="rectangle-67"></div>
              <div className="frame-container-2">
                <Link to="/discover">
                  <img className="frame-54" src="/img/frame-47@2x.svg" />
                </Link>
                <Link to="/search">
                  <img className="frame-48" src="/img/frame-35@2x.svg" />
                </Link>
                <Link to="/my-events">
                  <img className="frame-48" src="/img/frame-36@2x.svg" />
                </Link>
                <img className="frame-55" src="/img/frame-37@2x.svg" />
                <Link to="/vip-access">
                  <img className="frame-48" src="/img/frame-51@2x.svg" />
                </Link>
              </div>
              <div className="flex-row-3 sfprotext-medium-mercury-10px">
                <div className="place-5">{place}</div>
                <div className="search-5">{search}</div>
                <div className="my-events-4">{myEvents}</div>
                <div className="my-tabs-5">{myTabs2}</div>
                <div className="vip-access-3">{vipAccess}</div>
              </div>
              <div className="rectangle-68"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTabs;
