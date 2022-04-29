import React from "react";
import { Link } from "react-router-dom";
import "./Discover.css";

class Discover extends React.Component {
  render() {
    const {
      rectangle2,
      rectangle3,
      rectangle4,
      rectangle5,
      rectangle6,
      rectangle7,
      rectangle8,
      rectangle9,
      rectangle10,
      text2,
      becomeAPromoter,
      title,
      featuredVenues,
      subtitle,
      byRatings,
      seeAll,
      number,
      itemName,
      subtitle2,
      number2,
      itemName2,
      subtitle3,
      number3,
      itemName3,
      subtitle4,
      number4,
      itemName4,
      subtitle5,
      number5,
      itemName5,
      subtitle6,
      number6,
      itemName6,
      subtitle7,
      place,
      search,
      myEvents,
      myTabs,
      vipAccess,
      byLocation,
      seeAll2,
      partyTracker,
      rsvpWhereYouReGo,
      groupFund,
      raiseTheMoneyBeforeYouCommit,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="discover screen">
          <div className="frame-6"></div>
          <div className="overlap-group-1">
            <img className="rectangle-4" src="/img/rectangle@1x.svg" />
            <img className="frame-7" src="/img/frame-5@2x.svg" />
            <img className="frame-8" src="/img/frame-6@2x.svg" />
            <img className="frame-9" src="/img/frame-7@2x.svg" />
            <div className="rectangle-5"></div>
            <div className="rectangle-6"></div>
            <div className="rectangle-7"></div>
            <img className="rectangle-8" src={rectangle2} />
            <div className="rectangle-9"></div>
            <Link to="/account-settings">
              <img className="frame-10" src="/img/frame-8@2x.svg" />
            </Link>
            <div className="rectangle-10"></div>
            <div className="rectangle-11"></div>
            <Link to="/venue-information">
              <img className="rectangle-12" src={rectangle3} />
            </Link>
            <div className="rectangle-13"></div>
            <Link to="/venue-information">
              <img className="rectangle-14" src={rectangle4} />
            </Link>
            <div className="rectangle-15"></div>
            <Link to="/venue-information">
              <img className="rectangle-16" src={rectangle5} />
            </Link>
            <div className="rectangle-17"></div>
            <Link to="/venue-information">
              <img className="rectangle-18" src={rectangle6} />
            </Link>
            <div className="rectangle-19"></div>
            <Link to="/venue-information">
              <img className="rectangle-20" src={rectangle7} />
            </Link>
            <div className="rectangle-21"></div>
            <Link to="/venue-information">
              <img className="rectangle-22" src={rectangle8} />
            </Link>
            <div className="rectangle-23"></div>
            <div className="rectangle-24"></div>
            <img className="frame-11" src="/img/frame-9@2x.svg" />
            <Link to="/search">
              <img className="frame-12" src="/img/frame-10@2x.svg" />
            </Link>
            <img className="frame-13" src="/img/frame-11@2x.svg" />
            <Link to="/my-tabs">
              <img className="frame-14" src="/img/frame-12@2x.svg" />
            </Link>
            <Link to="/vip-access">
              <img className="frame-15" src="/img/frame-13@2x.svg" />
            </Link>
            <div className="rectangle-25"></div>
            <div className="rectangle-26"></div>
            <Link to="/venue-information">
              <img className="rectangle-27" src={rectangle9} />
            </Link>
            <div className="rectangle-28"></div>
            <Link to="/venue-information">
              <img className="rectangle-29" src={rectangle10} />
            </Link>
            <Link to="/party-tracker">
              <img className="frame-16" src="/img/frame-14@2x.svg" />
            </Link>
            <div className="rectangle-30"></div>
            <Link to="/my-events">
              <img className="frame-17" src="/img/frame-14@2x.svg" />
            </Link>
            <div className="rectangle-31"></div>
            <div className="rectangle-32"></div>
            <div className="text-2 sfprotext-normal-black-15px">{text2}</div>
            <div className="become-a-promoter sfprotext-normal-white-15px">{becomeAPromoter}</div>
            <h1 className="title nunito-semi-bold-prim-34px">{title}</h1>
            <div className="featured-venues">{featuredVenues}</div>
            <div className="subtitle">{subtitle}</div>
            <Link to="/by-rating-copy">
              <div className="by-ratings sfprodisplay-bold-mauve-20px">{byRatings}</div>
            </Link>
            <Link to="/by-rating-copy">
              <div className="see-all sfprotext-regular-normal-perano-17px">{seeAll}</div>
            </Link>
            <div className="number sfprotext-bold-black-15px">{number}</div>
            <div className="item-name sfprotext-regular-normal-black-15px">{itemName}</div>
            <div className="subtitle-1 sfprotext-regular-normal-oslo-gray-15px">{subtitle2}</div>
            <div className="number-1 sfprotext-bold-black-15px">{number2}</div>
            <div className="item-name-1 sfprotext-regular-normal-black-15px">{itemName2}</div>
            <div className="subtitle-2 sfprotext-regular-normal-oslo-gray-15px">{subtitle3}</div>
            <div className="number-2 sfprotext-bold-black-15px">{number3}</div>
            <div className="item-name-2 sfprotext-regular-normal-black-15px">{itemName3}</div>
            <div className="subtitle-3 sfprotext-regular-normal-oslo-gray-15px">{subtitle4}</div>
            <div className="number-3 sfprotext-bold-prim-15px">{number4}</div>
            <div className="item-name-3 sfprotext-regular-normal-blue-chalk-15px">{itemName4}</div>
            <div className="subtitle-4 sfprotext-regular-normal-whisper-15px">{subtitle5}</div>
            <div className="number-4 sfprotext-bold-prim-15px">{number5}</div>
            <div className="item-name-4 sfprotext-regular-normal-blue-chalk-15px">{itemName5}</div>
            <div className="subtitle-5 sfprotext-regular-normal-whisper-15px">{subtitle6}</div>
            <div className="number-5 sfprotext-bold-prim-15px">{number6}</div>
            <div className="item-name-5 sfprotext-regular-normal-blue-chalk-15px">{itemName6}</div>
            <div className="subtitle-6 sfprotext-regular-normal-whisper-15px">{subtitle7}</div>
            <div className="place-1 sfprotext-medium-mercury-10px">{place}</div>
            <div className="search sfprotext-medium-mercury-10px">{search}</div>
            <div className="my-events sfprotext-medium-mercury-10px">{myEvents}</div>
            <div className="my-tabs sfprotext-medium-mercury-10px">{myTabs}</div>
            <div className="vip-access sfprotext-medium-mercury-10px">{vipAccess}</div>
            <Link to="/by-location">
              <div className="by-location sfprodisplay-bold-mauve-20px">{byLocation}</div>
            </Link>
            <Link to="/by-location">
              <div className="see-all-1 sfprotext-regular-normal-perano-17px">{seeAll2}</div>
            </Link>
            <Link to="/party-tracker">
              <div className="party-tracker sfprotext-regular-normal-perano-17px">{partyTracker}</div>
            </Link>
            <p className="rsvp-where-youre-go sfprotext-regular-normal-prim-13px">{rsvpWhereYouReGo}</p>
            <Link to="/create-group-fund-event">
              <div className="group-fund sfprotext-regular-normal-perano-17px">{groupFund}</div>
            </Link>
            <p className="raise-the-money-before-you-commit sfprotext-regular-normal-prim-13px">
              {raiseTheMoneyBeforeYouCommit}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
