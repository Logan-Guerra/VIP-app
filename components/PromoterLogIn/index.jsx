import React from "react";
import { Link } from "react-router-dom";
import "./PromoterLogIn.css";

class PromoterLogIn extends React.Component {
  render() {
    const {
      text17,
      place,
      promoterLogIn,
      inputType,
      inputPlaceholder,
      inputType2,
      inputPlaceholder2,
      logIn,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="promoter-log-in-1 screen">
          <div className="frame-136"></div>
          <div className="overlap-group-16">
            <div className="overlap-group1-9">
              <img className="frame-137" src="/img/frame-129@2x.svg" />
              <img className="frame-138" src="/img/frame-130@2x.svg" />
              <img className="frame-139" src="/img/frame-131@2x.svg" />
              <div className="rectangle-155"></div>
              <img className="frame-135" src="/img/frame-88@2x.svg" />
              <div className="rectangle-156"></div>
              <img className="frame-135" src="/img/frame-88@2x.svg" />
              <div className="text-17 sfprotext-normal-black-15px">{text17}</div>
              <Link to="/account-settings">
                <div className="place-12 sfprotext-regular-normal-azure-radiance-17px">{place}</div>
              </Link>
              <div className="promoter-log-in-2 nunito-semi-bold-prim-34px">{promoterLogIn}</div>
            </div>
            <img className="please-fill-in-a-few-details-below" src="/img/please-fill-in-a-few-details-below@2x.svg" />
            <img className="name" src="/img/name@2x.svg" />
            <input
              className="eg-michael-scott sfprotext-regular-normal-oslo-gray-17px"
              name="egmichaelscott"
              placeholder={inputPlaceholder}
              type={inputType}
            />
            <div className="rectangle-154"></div>
            <img className="password-2" src="/img/password-1@2x.svg" />
            <input
              className="text_input sfprotext-regular-normal-oslo-gray-17px"
              name="text_input"
              placeholder={inputPlaceholder2}
              type={inputType2}
            />
            <div className="rectangle-154"></div>
            <img className="become-a-promoter-2" src="/img/become-a-promoter-1@2x.svg" />
            <div className="overlap-group2-8">
              <Link to="/promoters-profile">
                <img className="rectangle-157" src="/img/rectangle-14@2x.svg" />
              </Link>
              <div className="log-in sfprotext-normal-white-15px">{logIn}</div>
            </div>
            <div className="rectangle-158"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoterLogIn;
