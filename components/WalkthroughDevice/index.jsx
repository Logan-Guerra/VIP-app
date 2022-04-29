import React from "react";
import "./WalkthroughDevice.css";

class WalkthroughDevice extends React.Component {
  render() {
    const { overlapGroup, text31, rectangle, welcomeToVip, checkOutSomeOfOu, getStarted } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="walkthrough-device screen">
          <div className="frame-213"></div>
          <div className="overlap-group-27" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="flex-row-34">
              <div className="text-31 sfprotext-normal-black-15px">{text31}</div>
              <img className="frame-214" src="/img/frame-30@2x.svg" />
              <img className="frame-215" src="/img/frame-208@2x.svg" />
              <img className="frame-216" src="/img/frame-31@2x.svg" />
            </div>
            <img className="rectangle-238" src={rectangle} />
            <div className="welcome-to-vip sfprodisplay-bold-prim-22px">{welcomeToVip}</div>
            <p className="check-out-some-of-ou sfprotext-regular-normal-prim-15px">{checkOutSomeOfOu}</p>
            <div className="flex-row-35">
              <div className="rectangle-239"></div>
              <div className="rectangle-237"></div>
              <div className="rectangle-237"></div>
              <div className="rectangle-237"></div>
            </div>
            <div className="overlap-group1-13">
              <div className="get-started sfprotext-normal-white-15px">{getStarted}</div>
            </div>
            <div className="rectangle-240"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkthroughDevice;
