import React from "react";
import { Link } from "react-router-dom";
import "./MyEvents.css";

class MyEvents extends React.Component {
  render() {
    const {
      text5,
      myEvents,
      groupFundOption,
      upComingEvent,
      subtitle,
      title,
      subtitle2,
      place,
      search,
      myEvents2,
      myTabs,
      vipAccess,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="my-events-1 screen">
          <div className="frame-35"></div>
          <div className="overlap-group-4">
            <div className="overlap-group1-1">
              <img className="frame-36" src="/img/frame-30@2x.svg" />
              <img className="frame-37" src="/img/frame-31@2x.svg" />
              <img className="frame-38" src="/img/frame-32@2x.svg" />
              <div className="rectangle-52"></div>
              <Link to="/account-settings">
                <img className="frame-39" src="/img/frame-33@2x.svg" />
              </Link>
              <div className="rectangle-53"></div>
              <div className="text-5 sfprotext-normal-black-15px">{text5}</div>
              <div className="my-events-2 nunito-semi-bold-prim-34px">{myEvents}</div>
            </div>
            <div className="overlap-group3-1">
              <Link to="/create-group-fund-event">
                <img className="rectangle-54" src="/img/rectangle-2@2x.svg" />
              </Link>
              <div className="group-fund-option sfprotext-normal-prim-15px">{groupFundOption}</div>
            </div>
            <Link to="/venue-information" className="align-self-flex-center">
              <div className="rectangle-55"></div>
            </Link>
            <div className="up-coming-event">{upComingEvent}</div>
            <div className="subtitle-10 sfprotext-regular-normal-blue-chalk-15px">{subtitle}</div>
            <Link to="/venue-information" className="align-self-flex-center">
              <div className="rectangle-56"></div>
            </Link>
            <div className="title-1 sfprotext-regular-normal-perano-17px">{title}</div>
            <div className="subtitle-10 sfprotext-regular-normal-blue-chalk-15px">{subtitle2}</div>
            <div className="overlap-group2-1">
              <div className="rectangle-57"></div>
              <div className="frame-container">
                <Link to="/discover">
                  <img className="frame-40" src="/img/frame-34@2x.svg" />
                </Link>
                <Link to="/search">
                  <img className="frame-41" src="/img/frame-35@2x.svg" />
                </Link>
                <img className="frame-34" src="/img/frame-36@2x.svg" />
                <img className="frame-34" src="/img/frame-37@2x.svg" />
                <img className="frame-34" src="/img/frame-38@2x.svg" />
              </div>
              <div className="flex-row">
                <div className="place-4 sfprotext-medium-mercury-10px">{place}</div>
                <div className="search-4 sfprotext-medium-mercury-10px">{search}</div>
                <div className="my-events-3 sfprotext-medium-mercury-10px">{myEvents2}</div>
                <div className="my-tabs-2 sfprotext-medium-mercury-10px">{myTabs}</div>
                <div className="vip-access-2">{vipAccess}</div>
              </div>
              <div className="rectangle-58"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyEvents;
