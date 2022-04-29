import React from "react";
import "./WalkthroughDevicePage2.css";

class WalkthroughDevicePage2 extends React.Component {
  render() {
    const { text30, rectangle, vipAccess, accesToSomeOfThe } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="walkthrough-device-page-2 screen">
          <div className="frame-209"></div>
          <div className="overlap-group-26 border-1px-black">
            <div className="flex-row-32">
              <div className="text-30 sfprotext-normal-black-15px">{text30}</div>
              <img className="frame-210" src="/img/frame-39@2x.svg" />
              <img className="frame-211" src="/img/frame-198@2x.svg" />
              <img className="frame-212" src="/img/frame-204@2x.svg" />
            </div>
            <img className="rectangle-233" src={rectangle} />
            <div className="vip-access-13 sfprodisplay-bold-prim-22px">{vipAccess}</div>
            <p className="acces-to-some-of-the sfprotext-regular-normal-prim-15px">{accesToSomeOfThe}</p>
            <div className="flex-row-33">
              <div className="rectangle-234"></div>
              <div className="rectangle-235"></div>
              <div className="rectangle-232"></div>
              <div className="rectangle-232"></div>
            </div>
            <div className="rectangle-236"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkthroughDevicePage2;
