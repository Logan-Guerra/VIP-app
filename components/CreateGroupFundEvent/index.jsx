import React from "react";
import { Link } from "react-router-dom";
import "./CreateGroupFundEvent.css";

class CreateGroupFundEvent extends React.Component {
  render() {
    const { text19, groupFund, create, create2, place, search, myEvents, myTabs, vipAccess } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="create-group-fund-event screen">
          <div className="frame-148"></div>
          <div className="overlap-group-18">
            <div className="overlap-group2-9">
              <img className="frame-149" src="/img/frame-44@2x.svg" />
              <img className="frame-150" src="/img/frame-31@2x.svg" />
              <img className="frame-151" src="/img/frame-46@2x.svg" />
              <div className="rectangle-170"></div>
              <div className="rectangle-171"></div>
              <div className="text-19 sfprotext-normal-black-15px">{text19}</div>
              <div className="group-fund-1 nunito-semi-bold-prim-34px">{groupFund}</div>
              <div className="create sfprotext-regular-normal-prim-17px">{create}</div>
              <img className="frame-152" src="/img/frame-147@2x.svg" />
            </div>
            <img className="event-name" src="/img/event-name-@2x.svg" />
            <img className="event-date" src="/img/event-date-@2x.svg" />
            <div className="flex-row-20">
              <img className="fund-goal" src="/img/fund-goal-@2x.svg" />
              <img className="x1200" src="/img/-1200@2x.svg" />
            </div>
            <img className="invite-friends" src="/img/invite-friends-@2x.svg" />
            <div className="overlap-group3-6">
              <div className="create-1 sfprotext-normal-white-15px">{create2}</div>
            </div>
            <div className="overlap-group1-10">
              <div className="rectangle-172"></div>
              <div className="frame-container-4">
                <Link to="/discover">
                  <img className="frame-153" src="/img/frame-47@2x.svg" />
                </Link>
                <img className="frame-146" src="/img/frame-35@2x.svg" />
                <img className="frame-146" src="/img/frame-36@2x.svg" />
                <Link to="/my-tabs">
                  <img className="frame-147" src="/img/frame-37@2x.svg" />
                </Link>
                <Link to="/vip-access">
                  <img className="frame-147" src="/img/frame-51@2x.svg" />
                </Link>
              </div>
              <div className="flex-row-21 sfprotext-medium-mercury-10px">
                <div className="place-15">{place}</div>
                <div className="search-9">{search}</div>
                <div className="my-events-7">{myEvents}</div>
                <div className="my-tabs-9">{myTabs}</div>
                <div className="vip-access-9">{vipAccess}</div>
              </div>
              <div className="rectangle-173"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateGroupFundEvent;
