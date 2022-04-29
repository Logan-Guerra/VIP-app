import React from "react";
import { Link } from "react-router-dom";
import "./PaymentMethod.css";

class PaymentMethod extends React.Component {
  render() {
    const { text14, selectYourPreferredPaymentMethod, rectangle, creditOrDebitCard, rectangle2, paypal } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="payment-method screen">
          <div className="frame-114"></div>
          <div className="overlap-group-14">
            <div className="flex-col-3">
              <div className="flex-col-4">
                <div className="overlap-group1-7">
                  <img className="frame-115" src="/img/frame-44@2x.svg" />
                  <img className="frame-116" src="/img/frame-31@2x.svg" />
                  <img className="frame-117" src="/img/frame-46@2x.svg" />
                  <div className="rectangle-135"></div>
                  <Link to="/account-settings">
                    <img className="frame-118" src="/img/frame-113@2x.svg" />
                  </Link>
                  <div className="rectangle-136"></div>
                  <div className="text-14 sfprotext-normal-black-15px">{text14}</div>
                </div>
                <div className="select-your-preferred-payment-method sfprodisplay-bold-prim-20px">
                  {selectYourPreferredPaymentMethod}
                </div>
              </div>
              <div className="flex-row-16">
                <div className="overlap-group-13">
                  <div className="rectangle-133"></div>
                  <img className="rectangle-134" src={rectangle} />
                </div>
                <div className="credit-or-debit-card sfprotext-regular-normal-prim-17px">{creditOrDebitCard}</div>
                <img className="frame-119" src="/img/frame-114@2x.svg" />
              </div>
              <div className="rectangle-137"></div>
            </div>
            <div className="flex-row-17">
              <div className="overlap-group-13">
                <div className="rectangle-133"></div>
                <img className="rectangle-134" src={rectangle2} />
              </div>
              <div className="pay-pal sfprotext-regular-normal-prim-15px">{paypal}</div>
              <img className="frame-120" src="/img/frame-114@2x.svg" />
            </div>
            <div className="rectangle-138"></div>
            <div className="rectangle-139"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
