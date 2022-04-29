import React from "react";
import { Link } from "react-router-dom";
import "./ReviewTab.css";

class ReviewTab extends React.Component {
  render() {
    const { text20, reviewOrder, close, total, price, completeOrder, byClickingComplet } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="review-tab screen">
          <div className="frame-154"></div>
          <div className="overlap-group-19">
            <div className="overlap-group2-10">
              <img className="frame-155" src="/img/frame@2x.svg" />
              <img className="frame-156" src="/img/frame-149@2x.svg" />
              <img className="frame-157" src="/img/frame-87@2x.svg" />
              <div className="rectangle-174"></div>
              <div className="rectangle-175"></div>
              <div className="text-20 sfprotext-normal-black-15px">{text20}</div>
              <div className="review-order">{reviewOrder}</div>
              <Link to="/my-tabs">
                <div className="close sfprotext-regular-normal-perano-17px">{close}</div>
              </Link>
            </div>
            <div className="rectangle-176"></div>
            <div className="flex-row-22">
              <img className="subtotal" src="/img/subtotal@2x.svg" />
              <img className="x4200" src="/img/-42-00@2x.svg" />
            </div>
            <div className="flex-row-23">
              <img className="discount" src="/img/discount@2x.svg" />
              <img className="x420" src="/img/--4-20@2x.svg" />
            </div>
            <div className="rectangle-177"></div>
            <div className="flex-row-24">
              <div className="total-1 sfprotext-normal-prim-15px">{total}</div>
              <div className="price-3">{price}</div>
            </div>
            <div className="overlap-group1-11">
              <div className="complete-order sfprotext-normal-white-15px">{completeOrder}</div>
            </div>
            <p className="by-clicking-complet">{byClickingComplet}</p>
            <div className="rectangle-178"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewTab;
