import React from "react";
import { Link } from "react-router-dom";
import "./AllowNotifications.css";

class AllowNotifications extends React.Component {
  render() {
    const { text1, place, done, rectangle } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="allow-notifications screen">
          <div className="frame"></div>
          <div className="overlap-group">
            <div className="overlap-group1">
              <img className="frame-1" src="/img/frame@2x.svg" />
              <img className="frame-2" src="/img/frame-1@2x.svg" />
              <img className="frame-3" src="/img/frame-2@2x.svg" />
              <div className="rectangle"></div>
              <img className="frame-4" src="/img/frame-3@2x.svg" />
              <div className="text-1 sfprotext-normal-black-15px">{text1}</div>
              <Link to="/phone-verification">
                <div className="place sfprotext-regular-normal-perano-17px">{place}</div>
              </Link>
              <Link to="/allow-location">
                <div className="done sfprotext-normal-perano-17px">{done}</div>
              </Link>
            </div>
            <img className="rectangle-1" src={rectangle} />
            <img className="youre-all-set" src="/img/you-re-all-set@2x.svg" />
            <img
              className="please-allow-notific"
              src="/img/please-allow-notifications-in-case-someone-messages-or-mentions-@2x.svg"
            />
            <div className="overlap-group3">
              <div className="overlap-group2">
                <img className="frame-5" src="/img/frame-4@2x.svg" />
                <div className="rectangle-2"></div>
              </div>
              <img className="allow-notifications-1" src="/img/allow-notifications@2x.svg" />
            </div>
            <img
              className="notifications-previe"
              src="/img/notifications-previews-will-be-shown-whether-the-phone-is-locked@2x.svg"
            />
            <div className="rectangle-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllowNotifications;
