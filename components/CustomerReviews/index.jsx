import React from "react";
import { Link } from "react-router-dom";
import "./CustomerReviews.css";

class CustomerReviews extends React.Component {
  render() {
    const {
      text21,
      reviews,
      text22,
      date,
      perfectRichUndulgenceTinyJar,
      iAm57AndFairSki,
      rectangle,
      rectangle2,
      text23,
      date2,
      twoStars,
      smellsNiceButItD,
      text24,
      november102008,
      surname,
      iVeBeenUsingThis,
      rectangle3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="customer-reviews screen">
          <div className="frame-160"></div>
          <div className="overlap-group-20">
            <div className="overlap-group2-11">
              <img className="frame-161" src="/img/frame-151@2x.svg" />
              <img className="frame-162" src="/img/frame-152@2x.svg" />
              <img className="frame-163" src="/img/frame-153@2x.svg" />
              <div className="rectangle-182"></div>
              <Link to="/venue-information">
                <img className="frame-164" src="/img/frame-154@2x.svg" />
              </Link>
              <div className="rectangle-183"></div>
              <div className="text-21 sfprotext-normal-black-15px">{text21}</div>
              <div className="reviews-1 sfprotext-normal-prim-17px">{reviews}</div>
            </div>
            <div className="flex-row-26">
              <div className="text-2-1 sfprotext-regular-normal-fuchsia-pink-17px">{text22}</div>
              <div className="date sfprotext-regular-normal-oslo-gray-13px">{date}</div>
            </div>
            <p className="overlap-group-item sfprotext-normal-blueberry-15px">{perfectRichUndulgenceTinyJar}</p>
            <p className="i-am-57-and-fair-ski sfprotext-regular-normal-perano-13px">{iAm57AndFairSki}</p>
            <div className="overlap-group-container-1">
              <div className="overlap-group4-5">
                <div className="rectangle-179"></div>
                <img className="rectangle-180" src={rectangle} />
              </div>
              <div className="overlap-group1-12">
                <div className="rectangle-179"></div>
                <img className="rectangle-180" src={rectangle2} />
              </div>
            </div>
            <div className="frame-container-5">
              <img className="frame-158" src="/img/frame-156@2x.svg" />
              <img className="frame-159" src="/img/frame-157@2x.svg" />
              <img className="frame-159" src="/img/frame-158@2x.svg" />
            </div>
            <div className="rectangle-181"></div>
            <div className="flex-row-25">
              <div className="text-2-1 sfprotext-regular-normal-fuchsia-pink-17px">{text23}</div>
              <div className="date-1 sfprotext-regular-normal-oslo-gray-13px">{date2}</div>
            </div>
            <div className="overlap-group-item sfprotext-normal-blueberry-15px">{twoStars}</div>
            <p className="smells-nice-but-it-d sfprotext-regular-normal-perano-13px">{smellsNiceButItD}</p>
            <div className="frame-container-6">
              <img className="frame-158" src="/img/frame-159@2x.svg" />
              <img className="frame-159" src="/img/frame-157@2x.svg" />
              <img className="frame-159" src="/img/frame-158@2x.svg" />
            </div>
            <div className="rectangle-181"></div>
            <div className="flex-row-25">
              <div className="text-2-1 sfprotext-regular-normal-fuchsia-pink-17px">{text24}</div>
              <div className="november-10-2008 sfprotext-regular-normal-oslo-gray-13px">{november102008}</div>
            </div>
            <div className="surname sfprotext-normal-blueberry-15px">{surname}</div>
            <p className="ive-been-using-this sfprotext-regular-normal-perano-13px">{iVeBeenUsingThis}</p>
            <div className="overlap-group3-7">
              <div className="rectangle-179"></div>
              <img className="rectangle-180" src={rectangle3} />
              <img className="frame-165" src="/img/frame-155@2x.svg" />
            </div>
            <div className="frame-container-5">
              <img className="frame-158" src="/img/frame-156@2x.svg" />
              <img className="frame-159" src="/img/frame-157@2x.svg" />
              <img className="frame-159" src="/img/frame-158@2x.svg" />
            </div>
            <div className="rectangle-184"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
