import React from "react";
import { Link } from "react-router-dom";
import "./NotificationSettings.css";

class NotificationSettings extends React.Component {
  render() {
    const {
      text16,
      notificationSettings,
      allowNotifications,
      notificationsPrevie,
      bannerStyle,
      temporary,
      sounds,
      badges,
      showPreviews,
      xdefault,
      save,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="notification-settings screen">
          <div className="frame-127"></div>
          <div className="overlap-group-container">
            <div className="overlap-group2-7">
              <img className="frame-128" src="/img/frame-39@2x.svg" />
              <img className="frame-129" src="/img/frame-40@2x.svg" />
              <img className="frame-130" src="/img/frame-87@2x.svg" />
              <div className="rectangle-147"></div>
              <Link to="/account-settings">
                <img className="frame-131" src="/img/frame-119@2x.svg" />
              </Link>
              <div className="rectangle-148"></div>
              <div className="text-16 sfprotext-normal-black-15px">{text16}</div>
              <div className="notification-settings-1 sfprotext-normal-prim-17px">{notificationSettings}</div>
            </div>
            <div className="overlap-group1-8">
              <div className="overlap-group5-3">
                <div className="rectangle-149"></div>
                <img className="frame-132" src="/img/frame-126@2x.svg" />
                <div className="allow-notifications-2 sfprotext-regular-normal-black-17px">{allowNotifications}</div>
              </div>
              <p className="notifications-previe-1">{notificationsPrevie}</p>
              <div className="flex-col-5">
                <div className="flex-col-6">
                  <div className="flex-row-18">
                    <div className="banner-style sfprotext-regular-normal-black-17px">{bannerStyle}</div>
                    <div className="temporary sfprotext-regular-normal-oslo-gray-17px">{temporary}</div>
                    <img className="frame-126" src="/img/frame-124@2x.svg" />
                  </div>
                  <div className="overlap-group7-2 sfprotext-regular-normal-black-17px">
                    <div className="overlap-group6-2">
                      <img className="frame-133" src="/img/frame-123@2x.svg" />
                      <div className="rectangle-150"></div>
                      <div className="rectangle-151"></div>
                      <img className="frame-134" src="/img/frame-128@2x.svg" />
                      <div className="rectangle-152"></div>
                    </div>
                    <div className="sounds">{sounds}</div>
                    <div className="badges">{badges}</div>
                  </div>
                </div>
                <div className="flex-row-19">
                  <div className="show-previews sfprotext-regular-normal-black-17px">{showPreviews}</div>
                  <div className="default sfprotext-regular-normal-oslo-gray-17px">{xdefault}</div>
                  <img className="frame-126" src="/img/frame-124@2x.svg" />
                </div>
              </div>
              <div className="overlap-group4-4">
                <div className="save-1">{save}</div>
              </div>
              <div className="rectangle-153"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationSettings;
