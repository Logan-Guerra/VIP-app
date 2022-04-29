import React from "react";
import { Link } from "react-router-dom";
import "./Passwords.css";

class Passwords extends React.Component {
  render() {
    const {
      text11,
      passwords,
      inputType,
      inputPlaceholder,
      inputType2,
      inputPlaceholder2,
      inputType3,
      inputPlaceholder3,
      save,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="passwords screen">
          <div className="frame-89"></div>
          <div className="overlap-group-10">
            <div className="overlap-group2-5">
              <img className="frame-90" src="/img/frame@2x.svg" />
              <img className="frame-91" src="/img/frame-1@2x.svg" />
              <img className="frame-92" src="/img/frame-87@2x.svg" />
              <div className="rectangle-115"></div>
              <Link to="/account-settings">
                <img className="frame-93" src="/img/frame-88@2x.svg" />
              </Link>
              <div className="text-11 sfprotext-normal-black-15px">{text11}</div>
            </div>
            <div className="overlap-group1-5">
              <div className="rectangle-116"></div>
              <div className="passwords-1 nunito-semi-bold-prim-34px">{passwords}</div>
              <input
                className="email-address sfprotext-regular-normal-suva-gray-15px"
                name="emailaddress"
                placeholder={inputPlaceholder}
                type={inputType}
              />
            </div>
            <div className="overlap-group3-4">
              <input
                className="current-password sfprotext-regular-normal-suva-gray-15px"
                name="currentpassword"
                placeholder={inputPlaceholder2}
                type={inputType2}
              />
              <img className="frame-94" src="/img/frame-89@2x.svg" />
            </div>
            <div className="overlap-group4-2">
              <input
                className="new-password sfprotext-regular-normal-suva-gray-15px"
                name="newpassword"
                placeholder={inputPlaceholder3}
                type={inputType3}
              />
              <img className="frame-95" src="/img/frame-89@2x.svg" />
            </div>
            <div className="overlap-group5-1">
              <div className="save sfprotext-normal-white-15px">{save}</div>
            </div>
            <div className="rectangle-117"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Passwords;
