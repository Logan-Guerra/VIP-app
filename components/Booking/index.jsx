import React from "react";
import "./Booking.css";

class Booking extends React.Component {
  render() {
    const {
      rectangle,
      text18,
      place,
      clubNameImage,
      confirm,
      reservation,
      package,
      place2,
      address,
      comments,
      total,
      price,
      yourCardWillNot,
      selected,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="booking screen">
          <div className="frame-140"></div>
          <div className="overlap-group-17">
            <div className="rectangle-159"></div>
            <div className="rectangle-160"></div>
            <img className="frame-141" src="/img/frame@2x.svg" />
            <img className="frame-142" src="/img/frame-1@2x.svg" />
            <img className="frame-143" src="/img/frame-87@2x.svg" />
            <img className="frame-144" src="/img/frame-137@2x.svg" />
            <div className="rectangle-161"></div>
            <img className="rectangle-162" src={rectangle} />
            <div className="rectangle-163"></div>
            <img className="rectangle-164" src="/img/rectangle-15@2x.svg" />
            <div className="rectangle-165"></div>
            <div className="rectangle-166"></div>
            <img className="frame-145" src="/img/frame-138@2x.svg" />
            <div className="rectangle-167"></div>
            <div className="rectangle-168"></div>
            <div className="text-18 sfprotext-normal-black-15px">{text18}</div>
            <div className="place-13 sfprotext-regular-normal-perano-17px">{place}</div>
            <div className="club-nameimage">{clubNameImage}</div>
            <div className="confirm sfprotext-normal-white-17px">{confirm}</div>
            <div className="reservation">{reservation}</div>
            <div className="package">{package}</div>
            <div className="place-14 sfprodisplay-regular-normal-whisper-20px">{place2}</div>
            <div className="address sfprotext-medium-perano-20px">{address}</div>
            <div className="comments sfprodisplay-regular-normal-whisper-20px">{comments}</div>
            <div className="total sfprotext-regular-normal-prim-15px">{total}</div>
            <img className="including-20-off-coupon" src="/img/including-20--off-coupon@2x.svg" />
            <div className="price-2">{price}</div>
            <p className="your-card-will-not">{yourCardWillNot}</p>
            <div className="rectangle-169"></div>
            <div className="selected sfprotext-medium-perano-20px">{selected}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
