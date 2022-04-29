import React from "react";
import { Link } from "react-router-dom";
import "./VIPAccess.css";

class VIPAccess extends React.Component {
  render() {
    const {
      rectangle,
      text8,
      place,
      search,
      myEvents,
      myTabs,
      vipAccess,
      vipAccess2,
      subtitle,
      promoterRewardTracker,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="vip-access-4 screen">
          <div className="frame-56"></div>
          <div className="overlap-group-7">
            <div className="rectangle-69"></div>
            <img className="frame-57" src="/img/frame-44@2x.svg" />
            <img className="frame-58" src="/img/frame-31@2x.svg" />
            <img className="frame-59" src="/img/frame-46@2x.svg" />
            <div className="rectangle-70"></div>
            <Link to="/discover">
              <img className="frame-60" src="/img/frame-47@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-61" src="/img/frame-35@2x.svg" />
            </Link>
            <Link to="/my-events">
              <img className="frame-62" src="/img/frame-36@2x.svg" />
            </Link>
            <Link to="/my-tabs">
              <img className="frame-63" src="/img/frame-37@2x.svg" />
            </Link>
            <img className="frame-64" src="/img/frame-51@2x.svg" />
            <div className="rectangle-71"></div>
            <div className="rectangle-72"></div>
            <img className="rectangle-73" src={rectangle} />
            <div className="rectangle-74"></div>
            <div className="rectangle-75"></div>
            <div className="rectangle-76"></div>
            <div className="text-8 sfprotext-normal-black-15px">{text8}</div>
            <div className="place-6 sfprotext-medium-mercury-10px">{place}</div>
            <div className="search-6 sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-events-5 sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs-6 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-5 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <div className="vip-access-6 nunito-semi-bold-prim-34px">{vipAccess2}</div>
            <div className="subtitle-11 sfprotext-regular-normal-prim-15px">{subtitle}</div>
            <div className="promoter-reward-tracker sfprotext-normal-white-15px">{promoterRewardTracker}</div>
            <div className="rectangle-77"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default VIPAccess;
