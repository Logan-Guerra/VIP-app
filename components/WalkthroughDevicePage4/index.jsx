import React from "react";
import { Link } from "react-router-dom";
import "./WalkthroughDevicePage4.css";

class WalkthroughDevicePage4 extends React.Component {
  render() {
    const { text28, rectangle, splitPayGroupFund, whenTheBillIsDue } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="walkthrough-device-page-4 screen">
          <div className="frame-200"></div>
          <div className="overlap-group-24">
            <div className="flex-row-27">
              <div className="text-28 sfprotext-normal-black-15px">{text28}</div>
              <img className="frame-201" src="/img/frame@2x.svg" />
              <img className="frame-202" src="/img/frame-198@2x.svg" />
              <img className="frame-203" src="/img/frame-1@2x.svg" />
            </div>
            <div className="flex-row-28">
              <img className="rectangle-223" src={rectangle} />
              <Link to="/discover">
                <img className="frame-204" src="/img/frame-199@2x.svg" />
              </Link>
            </div>
            <div className="split-pay-group-fund sfprodisplay-bold-prim-22px">{splitPayGroupFund}</div>
            <p className="when-the-bill-is-due sfprotext-regular-normal-prim-15px">{whenTheBillIsDue}</p>
            <div className="flex-row-29">
              <div className="rectangle-224"></div>
              <div className="rectangle-222"></div>
              <div className="rectangle-222"></div>
              <div className="rectangle-225"></div>
            </div>
            <div className="rectangle-226"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkthroughDevicePage4;
