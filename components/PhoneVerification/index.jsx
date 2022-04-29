import React from "react";
import { Link } from "react-router-dom";
import "./PhoneVerification.css";

class PhoneVerification extends React.Component {
  render() {
    const { text6, editPhone, iDidnTReceiveAMessage, skip, overlapGroup1 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phone-verification screen">
          <div className="frame-42"></div>
          <div className="overlap-group-5">
            <div className="flex-row-1">
              <div className="flex-row-2">
                <Link to="/create-account">
                  <img className="frame-43" src="/img/frame-3@2x.svg" />
                </Link>
                <div className="text-6 sfprotext-normal-black-15px">{text6}</div>
                <div className="flex-col">
                  <img className="frame-44" src="/img/frame-39@2x.svg" />
                  <img className="enter-verification-code" src="/img/enter-verification-code@2x.svg" />
                  <img className="we-sent-a-code-to" src="/img/we-sent-a-code-to-@2x.svg" />
                  <img className="x123-412-32-41" src="/img/-123--412-32-41@2x.svg" />
                  <div className="edit-phone">{editPhone}</div>
                  <img className="enter-6-digit-code" src="/img/enter-6-digit-code@2x.svg" />
                  <div className="overlap-group2-2">
                    <img className="frame-45" src="/img/frame-43@2x.svg" />
                  </div>
                  <p className="i-didnt-receive-a-message sfprotext-normal-blueberry-13px">{iDidnTReceiveAMessage}</p>
                </div>
              </div>
              <div className="flex-col-1">
                <div className="frame-container-1">
                  <img className="frame-46" src="/img/frame-2@2x.svg" />
                  <img className="frame-47" src="/img/frame-40@2x.svg" />
                </div>
                <Link to="/allow-notifications">
                  <div className="skip sfprotext-normal-perano-17px">{skip}</div>
                </Link>
              </div>
            </div>
            <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="rectangle-59"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneVerification;
