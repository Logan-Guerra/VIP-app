import React from "react";
import "./VIPScreenDark.css";

class VIPScreenDark extends React.Component {
  render() {
    const { rectangle, text1, tableAndPrivateSectionService } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="vip-screen-dark screen">
          <div className="frame-334"></div>
          <div className="overlap-group-29">
            <img className="frame-335" src="/img/frame@2x.svg" />
            <img className="frame-336" src="/img/frame-1@2x.svg" />
            <img className="frame-337" src="/img/frame-2@2x.svg" />
            <div className="rectangle-342"></div>
            <img className="rectangle-343 animate-enter" show-on-scroll src={rectangle} />
            <div className="rectangle-344"></div>
            <div className="text-34 sfprotext-normal-black-15px">{text1}</div>
            <p className="table-and-private-section-service">{tableAndPrivateSectionService}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VIPScreenDark;
