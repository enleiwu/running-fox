import React, { useState } from 'react';
import { GiFishingBoat } from 'react-icons/gi';
import { SiMastercard } from 'react-icons/si';
import { GrVisa } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';
import './Plan.css';
import strings from '../../resources/text';

const planOptions = [
  {
    icon: GiFishingBoat,
    name: 'small business',
    price: '8,350',
  },
];

const paymentMethods = [
  {
    cardType: SiMastercard,
    cardNumber: '2344 xxxx xxxx 8880',
  },
  {
    cardType: GrVisa,
    cardNumber: '8890 xxxx xxxx 1234',
  },
];

const Plan = () => {
  const [currentPlan] = useState(planOptions[0]);

  const cardsList = paymentMethods.map((card) => (
    <div className="card" key={card.cardNumber}>
      <div className="card-info">
        <div className="card-icon">
          <card.cardType size={30} />
        </div>
        <div className="card-num">
          <h5>{strings.creditCard}</h5>
          <p>{card.cardNumber}</p>
        </div>
      </div>
      <input className="card-cvc" type="text" placeholder={strings.cvc} />
    </div>
  ));
  return (
    <div className="plan sections">
      <header className="plan-header">
        <h4>{strings.planTitle}</h4>
        <p className="sub-strings">{strings.planTitleSub}</p>
      </header>
      <div className="current-plan">
        <div className="plan-type">
          <div className="plan-icon">
            <currentPlan.icon color="lightSteelBlue" size={50} />
          </div>
          <div className="plan-name">
            <h5>{currentPlan.name}</h5>
            <button className="link-button" type="button">{strings.changePlan}</button>
          </div>
        </div>
        <div className="plan-price">
          <p>$</p>
          <h2>{currentPlan.price}</h2>
          <p>/ year</p>
        </div>
      </div>
      <div className="payment">
        <h5 className="payment-header">{strings.paymentDetails}</h5>
        <div className="payment-methods">
          {cardsList}
          <button className="link-button" type="button">{strings.addPaymentMethod}</button>
        </div>
      </div>
      <input className="email" type="text" placeholder={strings.emailAddress} />
      <button className="solid-button" type="button">
        {strings.proceed}
        <BsArrowRight color="white" size={20} />
      </button>
    </div>
  );
};

export default Plan;
