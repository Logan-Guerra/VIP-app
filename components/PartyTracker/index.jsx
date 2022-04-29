import React from "react";
import { Link } from "react-router-dom";
import "./PartyTracker.css";

class PartyTracker extends React.Component {
  render() {
    const {
      text25,
      place,
      search,
      myEvents,
      myTabs,
      vipAccess,
      place2,
      partyTracker,
      mostPopularOverall,
      club1,
      address,
      club2,
      dead,
      dead2,
      dead3,
      fullHouse,
      fullHouse2,
      fullHouse3,
      club3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="party-tracker-1 screen">
          <div className="frame-166"></div>
          <div className="overlap-group-21">
            <div className="rectangle-185"></div>
            <img className="frame-167" src="/img/frame-44@2x.svg" />
            <img className="frame-168" src="/img/frame-31@2x.svg" />
            <img className="frame-169" src="/img/frame-46@2x.svg" />
            <div className="rectangle-186"></div>
            <div className="rectangle-187"></div>
            <Link to="/discover">
              <img className="frame-170" src="/img/frame-47@2x.svg" />
            </Link>
            <Link to="/search">
              <img className="frame-171" src="/img/frame-35@2x.svg" />
            </Link>
            <Link to="/my-events">
              <img className="frame-172" src="/img/frame-36@2x.svg" />
            </Link>
            <Link to="/my-tabs">
              <img className="frame-173" src="/img/frame-37@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-174" src="/img/frame-51@2x.svg" />
            </Link>
            <div className="rectangle-188"></div>
            <img className="frame-175" src="/img/frame-173@2x.svg" />
            <Link to="/account-settings">
              <img className="frame-176" src="/img/frame-174@2x.svg" />
            </Link>
            <div className="rectangle-189"></div>
            <div className="rectangle-190"></div>
            <div className="rectangle-191"></div>
            <div className="rectangle-192"></div>
            <div className="rectangle-193"></div>
            <div className="rectangle-194"></div>
            <div className="rectangle-195"></div>
            <div className="rectangle-196"></div>
            <img className="frame-177" src="/img/frame-175@2x.svg" />
            <div className="rectangle-197"></div>
            <div className="text-25 sfprotext-normal-black-15px">{text25}</div>
            <div className="place-16 sfprotext-medium-mercury-10px">{place}</div>
            <div className="search-10 sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-events-8 sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs-10 sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access-10 sfprotext-medium-mercury-10px">{vipAccess}</div>
            <Link to="/discover">
              <div className="place-17 sfprotext-regular-normal-perano-17px">{place2}</div>
            </Link>
            <div className="party-tracker-2 nunito-semi-bold-prim-34px">{partyTracker}</div>
            <div className="most-popular-overall">{mostPopularOverall}</div>
            <div className="club-1 sfprotext-normal-perano-17px">{club1}</div>
            <p className="address-1">{address}</p>
            <div className="club-2 sfprotext-normal-perano-17px">{club2}</div>
            <div className="dead sfprotext-regular-normal-ghost-13px">{dead}</div>
            <div className="dead-1 sfprotext-regular-normal-ghost-13px">{dead2}</div>
            <div className="dead-2 sfprotext-regular-normal-ghost-13px">{dead3}</div>
            <div className="full-house sfprotext-regular-normal-ghost-13px">{fullHouse}</div>
            <div className="full-house-1 sfprotext-regular-normal-ghost-13px">{fullHouse2}</div>
            <div className="full-house-2 sfprotext-regular-normal-ghost-13px">{fullHouse3}</div>
            <div className="club-3 sfprotext-normal-perano-17px">{club3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartyTracker;
