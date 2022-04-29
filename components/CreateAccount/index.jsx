import React from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";

class CreateAccount extends React.Component {
  render() {
    const { text32, signIn, createAccount, firstName, lastName, email, password, createAccount2 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="create-account-2 screen">
          <div className="frame-218"></div>
          <div className="overlap-group-28">
            <div className="flex-row-36">
              <div className="text-32 sfprotext-normal-black-15px">{text32}</div>
              <img className="frame-219" src="/img/frame-39@2x.svg" />
              <img className="frame-220" src="/img/frame-2@2x.svg" />
              <img className="frame-221" src="/img/frame-204@2x.svg" />
            </div>
            <img className="frame-222" src="/img/frame-212@2x.svg" />
            <div className="flex-row-37">
              <Link to="/log-in-options">
                <div className="sign-in-1">{signIn}</div>
              </Link>
              <div className="create-account-3 sfprotext-normal-blueberry-13px">{createAccount}</div>
            </div>
            <div className="overlap-group2-12">
              <div className="rectangle-241"></div>
            </div>
            <div className="overlap-group-container-2">
              <div className="overlap-group4-6">
                <div className="first-name sfprotext-regular-normal-suva-gray-15px">{firstName}</div>
              </div>
              <div className="overlap-group3-8">
                <div className="last-name">{lastName}</div>
              </div>
            </div>
            <div className="overlap-group5-4">
              <div className="email-1 sfprotext-regular-normal-suva-gray-15px">{email}</div>
            </div>
            <div className="overlap-group6-3">
              <div className="password-3 sfprotext-regular-normal-suva-gray-15px">{password}</div>
              <img className="frame-223" src="/img/frame-104@2x.svg" />
            </div>
            <div className="flex-row-38">
              <img className="frame-217" src="/img/frame-106@2x.svg" />
              <img
                className="stage-can-send-me-pr-1"
                src="/img/stage-can-send-me-product-updates-and-the-occasional-newsletters@2x.svg"
              />
            </div>
            <div className="flex-row-39">
              <img className="frame-217" src="/img/frame-214@2x.svg" />
              <img
                className="i-agree-to-the-terms-1"
                src="/img/i-agree-to-the-terms-and-conditions-and-privacy-policy-@2x.svg"
              />
            </div>
            <div className="overlap-group1-14">
              <div className="create-account-4 sfprotext-normal-white-15px">{createAccount2}</div>
            </div>
            <div className="rectangle-242"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
