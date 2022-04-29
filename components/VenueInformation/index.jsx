import React from "react";
import { Link } from "react-router-dom";
import "./VenueInformation.css";

class VenueInformation extends React.Component {
  render() {
    const {
      rectangle,
      rectangle2,
      rectangle3,
      rectangle4,
      rectangle5,
      rectangle6,
      rectangle10,
      rectangle12,
      rectangle13,
      text10,
      locationInfo,
      featureOneFeatureTwoFeatureThree,
      x10Pm12Pm,
      phone2,
      greenplaceCom,
      venueInfo,
      checkIn,
      wedJan20,
      selectPackage,
      tagline,
      brandNameOrMarkOfLocation,
      featurerating,
      place,
      tagline2,
      packageDescription,
      featureOneFeatureTwo,
      price,
      tagline3,
      packageDescription2,
      featureOneFeatureTwo2,
      price2,
      reviews,
      number,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="venue-information screen">
          <div className="frame-80"></div>
          <div className="overlap-group-9">
            <div className="rectangle-86"></div>
            <img className="frame-81" src="/img/frame-77@2x.svg" />
            <img className="frame-82" src="/img/frame-78@2x.svg" />
            <img className="frame-83" src="/img/frame-79@2x.svg" />
            <div className="rectangle-87"></div>
            <div className="rectangle-88"></div>
            <div className="rectangle-89"></div>
            <div className="rectangle-90"></div>
            <img className="rectangle-91" src={rectangle} />
            <div className="rectangle-92"></div>
            <img className="rectangle-93" src={rectangle2} />
            <div className="rectangle-94"></div>
            <img className="rectangle-95" src={rectangle3} />
            <div className="rectangle-96"></div>
            <img className="rectangle-97" src={rectangle4} />
            <div className="rectangle-98"></div>
            <img className="rectangle-99" src={rectangle5} />
            <div className="rectangle-100"></div>
            <img className="rectangle-101" src={rectangle6} />
            <div className="rectangle-102"></div>
            <Link to="/discover">
              <img className="frame-84" src="/img/frame-80@2x.svg" />
            </Link>
            <img className="rectangle-103" src="/img/rectangle-6@2x.svg" />
            <img className="frame-85" src="/img/frame-81@2x.svg" />
            <img className="rectangle-104" src="/img/rectangle-7@2x.svg" />
            <img className="frame-86" src="/img/frame-82@2x.svg" />
            <img className="rectangle-105" src="/img/rectangle-8@2x.svg" />
            <img className="frame-87" src="/img/frame-83@2x.svg" />
            <div className="rectangle-106"></div>
            <img className="rectangle-107" src={rectangle10} />
            <Link to="/booking">
              <img className="rectangle-108" src="/img/rectangle-9@2x.svg" />
            </Link>
            <div className="rectangle-109"></div>
            <img className="rectangle-110" src={rectangle12} />
            <div className="rectangle-111"></div>
            <img className="rectangle-112" src={rectangle13} />
            <Link to="/customer-reviews">
              <img className="frame-88" src="/img/frame-84@2x.svg" />
            </Link>
            <div className="rectangle-113"></div>
            <div className="rectangle-114"></div>
            <div className="text-10 sfprotext-normal-black-15px">{text10}</div>
            <div className="location-info sfprodisplay-bold-mauve-20px">{locationInfo}</div>
            <img className="alexander-meiner-str" src="/img/alexander-mei-ner-stra-e-1--12526-berlin--germany@2x.svg" />
            <p className="feature-one-feature-two-feature-three sfprotext-regular-normal-blue-chalk-13px">
              {featureOneFeatureTwoFeatureThree}
            </p>
            <img className="entry-time" src="/img/entry-time@2x.svg" />
            <div className="x10-pm-12-pm sfprotext-regular-normal-oslo-gray-17px">{x10Pm12Pm}</div>
            <img className="phone" src="/img/phone@2x.svg" />
            <div className="phone-1 sfprotext-regular-normal-oslo-gray-17px">{phone2}</div>
            <img className="website" src="/img/website@2x.svg" />
            <div className="greenplacecom sfprotext-regular-normal-oslo-gray-17px">{greenplaceCom}</div>
            <img
              className="urban-inspired-space"
              src="/img/urban-inspired-spaces-and-vibrant-social-scenes-for-the-next-gen@2x.svg"
            />
            <div className="venue-info sfprodisplay-bold-mauve-20px">{venueInfo}</div>
            <div className="check-in">{checkIn}</div>
            <div className="wed-jan-20">{wedJan20}</div>
            <div className="select-package sfprodisplay-bold-mauve-20px">{selectPackage}</div>
            <div className="tagline">{tagline}</div>
            <div className="brand-name-or-mark-of-location nunito-semi-bold-prim-34px">{brandNameOrMarkOfLocation}</div>
            <div className="feature-rating">{featurerating}</div>
            <div className="place-8 sfprotext-normal-white-15px">{place}</div>
            <div className="tagline-1 sfprotext-normal-blueberry-11px">{tagline2}</div>
            <div className="package-description sfprotext-normal-prim-15px">{packageDescription}</div>
            <p className="feature-one-feature-two sfprotext-regular-normal-prim-13px">{featureOneFeatureTwo}</p>
            <div className="price sfprotext-normal-prim-17px">{price}</div>
            <div className="tagline-2 sfprotext-normal-blueberry-11px">{tagline3}</div>
            <div className="package-description-1 sfprotext-normal-prim-15px">{packageDescription2}</div>
            <p className="feature-one-feature-two-1 sfprotext-regular-normal-prim-13px">{featureOneFeatureTwo2}</p>
            <div className="price-1 sfprotext-normal-prim-17px">{price2}</div>
            <Link to="/customer-reviews">
              <div className="reviews">{reviews}</div>
            </Link>
            <Link to="/customer-reviews">
              <div className="number-6 sfprotext-regular-normal-perano-17px">{number}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VenueInformation;
