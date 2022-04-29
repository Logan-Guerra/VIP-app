import React from "react";
import "./WalkthroughDevicePage3.css";

class WalkthroughDevicePage3 extends React.Component {
  render() {
    const { text29, rectangle, partyTracker, thisUniqueToolGiv } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="walkthrough-device-page-3 screen">
          <div className="frame-205"></div>
          <div className="overlap-group-25">
            <div className="flex-row-30">
              <div className="text-29 sfprotext-normal-black-15px">{text29}</div>
              <img className="frame-206" src="/img/frame-39@2x.svg" />
              <img className="frame-207" src="/img/frame-198@2x.svg" />
              <img className="frame-208" src="/img/frame-40@2x.svg" />
            </div>
            <img className="rectangle-228" src={rectangle} />
            <div className="party-tracker-3 sfprodisplay-bold-prim-22px">{partyTracker}</div>
            <p className="this-unique-tool-giv sfprotext-regular-normal-prim-15px">{thisUniqueToolGiv}</p>
            <div className="flex-row-31">
              <div className="rectangle-229"></div>
              <div className="rectangle-227"></div>
              <div className="rectangle-230"></div>
              <div className="rectangle-227"></div>
            </div>
            <div className="rectangle-231"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkthroughDevicePage3;
