import React from "react";
import { Link } from "react-router-dom";
import "./AccountSettings.css";

class AccountSettings extends React.Component {
  render() {
    const { text9, rectangle, ad, place, search, favorits, myTabs, vipAccess } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="account-settings screen">
          <div className="frame-66"></div>
          <div className="overlap-group-8">
            <div className="flex-col-2">
              <div className="flex-row-5">
                <div className="text-9 sfprotext-normal-black-15px">{text9}</div>
                <img className="frame-67" src="/img/frame-61@2x.svg" />
                <img className="frame-68" src="/img/frame-63@2x.svg" />
                <img className="frame-69" src="/img/frame-62@2x.svg" />
              </div>
              <img className="hey-logan" src="/img/hey--logan@2x.svg" />
              <img className="my-account" src="/img/my-account@2x.svg" />
              <div className="flex-row-6">
                <Link to="/history">
                  <img className="history" src="/img/history@2x.svg" />
                </Link>
                <Link to="/history">
                  <img className="frame-70" src="/img/frame-64@2x.svg" />
                </Link>
              </div>
              <div className="rectangle-78"></div>
              <div className="flex-row-4">
                <Link to="/passwords">
                  <img className="password" src="/img/password@2x.svg" />
                </Link>
                <Link to="/passwords">
                  <img className="frame-71" src="/img/frame-64@2x.svg" />
                </Link>
              </div>
              <div className="rectangle-78"></div>
              <div className="flex-row-4">
                <Link to="/payment-method">
                  <img className="payment-methods" src="/img/payment-methods@2x.svg" />
                </Link>
                <Link to="/payment-method">
                  <img className="frame-72" src="/img/frame-64@2x.svg" />
                </Link>
              </div>
              <div className="rectangle-78"></div>
              <img className="location-1" src="/img/location@2x.svg" />
              <img
                className="this-location-define"
                src="/img/this-location-defines-your-language-and-currency@2x.svg"
              />
            </div>
            <div className="flex-row-7">
              <div className="overlap-group3-3">
                <div className="rectangle-79"></div>
                <img className="rectangle-80" src={rectangle} />
              </div>
              <img className="france" src="/img/france@2x.svg" />
              <img className="frame-73" src="/img/frame-64@2x.svg" />
            </div>
            <div className="rectangle-81"></div>
            <img className="settings" src="/img/settings@2x.svg" />
            <div className="overlap-group4-1">
              <div className="overlap-group2-4">
                <img className="frame-74" src="/img/frame-68@2x.svg" />
                <div className="rectangle-82"></div>
              </div>
              <img className="face-id" src="/img/face-id@2x.svg" />
            </div>
            <div className="flex-row-8">
              <Link to="/notification-settings">
                <img className="notifications" src="/img/notifications@2x.svg" />
              </Link>
              <Link to="/notification-settings">
                <img className="frame-75" src="/img/frame-64@2x.svg" />
              </Link>
            </div>
            <div className="rectangle-78"></div>
            <div className="flex-row-9">
              <Link to="/location-services">
                <img className="location-services" src="/img/location-services@2x.svg" />
              </Link>
              <Link to="/location-services">
                <img className="frame-76" src="/img/frame-64@2x.svg" />
              </Link>
            </div>
            <div className="rectangle-78"></div>
            <img className="promoters" src="/img/promoters@2x.svg" />
            <div className="flex-row-10">
              <Link to="/promoter-log-in">
                <img className="promoter-log-in" src="/img/promoter-log-in@2x.svg" />
              </Link>
              <img className="frame-77" src="/img/frame-64@2x.svg" />
            </div>
            <div className="rectangle-78"></div>
            <Link to="/promoter-log-in" className="align-self-flex-center">
              <div className="rectangle-83"></div>
            </Link>
            <img className="become-a-promoter-1" src="/img/become-a-promoter@2x.svg" />
            <div className="ad sfprotext-regular-normal-oslo-gray-15px">{ad}</div>
            <div className="overlap-group1-4">
              <div className="rectangle-84"></div>
              <div className="frame-container-3">
                <Link to="/discover">
                  <img className="frame-78" src="/img/frame-71@2x.svg" />
                </Link>
                <Link to="/search">
                  <img className="frame-65" src="/img/frame-72@2x.svg" />
                </Link>
                <img className="frame-79" src="/img/frame-73@2x.svg" />
                <Link to="/my-tabs">
                  <img className="frame-65" src="/img/frame-74@2x.svg" />
                </Link>
                <Link to="/vip-access">
                  <img className="frame-65" src="/img/frame-75@2x.svg" />
                </Link>
              </div>
              <div className="flex-row-11 sfprotext-medium-mercury-10px">
                <div className="place-7">{place}</div>
                <div className="search-7">{search}</div>
                <div className="favorits">{favorits}</div>
                <div className="my-tabs-7">{myTabs}</div>
                <div className="vip-access-7">{vipAccess}</div>
              </div>
              <div className="rectangle-85"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSettings;
