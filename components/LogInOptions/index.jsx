import React from "react";
import { Link } from "react-router-dom";
import "./LogInOptions.css";

class LogInOptions extends React.Component {
  render() {
    const {
      text13,
      signIn,
      createAccount,
      signUpWithApple,
      signUpWithFacebook,
      signUpWithGoogle,
      orSignInByEmail,
      email,
      password,
      stageCanSendMePr,
      iAgreeToTheTerms,
      createAccount2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="log-in-options screen">
          <div className="frame-108"></div>
          <div className="overlap-group-12 border-1px-black">
            <div className="flex-row-12">
              <div className="text-13 sfprotext-normal-black-15px">{text13}</div>
              <img className="frame-109" src="/img/frame-30@2x.svg" />
              <img className="frame-110" src="/img/frame-102@2x.svg" />
              <img className="frame-111" src="/img/frame-31@2x.svg" />
            </div>
            <img className="frame-112" src="/img/frame-103@2x.svg" />
            <div className="flex-row-13">
              <div className="sign-in sfprotext-normal-blueberry-13px">{signIn}</div>
              <Link to="/create-account">
                <div className="create-account">{createAccount}</div>
              </Link>
            </div>
            <div className="overlap-group4-3">
              <div className="rectangle-130"></div>
              <div className="rectangle-131"></div>
            </div>
            <div className="overlap-group3-5 border-1px-mischka">
              <img className="frame-106" src="/img/frame-107@2x.svg" />
              <div className="sign-up-with-apple sfprotext-normal-black-15px">{signUpWithApple}</div>
            </div>
            <div className="overlap-group5-2">
              <img className="frame-106" src="/img/frame-108@2x.svg" />
              <div className="sign-up-with-facebook">{signUpWithFacebook}</div>
            </div>
            <div className="overlap-group6-1 border-1px-mischka">
              <img className="frame-106" src="/img/frame-109@2x.svg" />
              <div className="sign-up-with-google">{signUpWithGoogle}</div>
            </div>
            <p className="or-sign-in-by-email sfprotext-regular-normal-prim-13px">{orSignInByEmail}</p>
            <div className="overlap-group7-1">
              <div className="email sfprotext-regular-normal-suva-gray-15px">{email}</div>
            </div>
            <div className="overlap-group2-6">
              <div className="password-1 sfprotext-regular-normal-suva-gray-15px">{password}</div>
              <img className="frame-113" src="/img/frame-104@2x.svg" />
            </div>
            <div className="flex-row-14">
              <img className="frame-107" src="/img/frame-106@2x.svg" />
              <p className="stage-can-send-me-pr sfprotext-regular-normal-black-13px">{stageCanSendMePr}</p>
            </div>
            <div className="flex-row-15">
              <img className="frame-107" src="/img/frame-105@2x.svg" />
              <p className="i-agree-to-the-terms sfprotext-regular-normal-black-13px">{iAgreeToTheTerms}</p>
            </div>
            <div className="overlap-group1-6">
              <div className="create-account-1 sfprotext-normal-white-15px">{createAccount2}</div>
            </div>
            <div className="rectangle-132"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInOptions;
