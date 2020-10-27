import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { AiOutlineClockCircle, AiOutlineFileText } from 'react-icons/ai';
import 'react-input-range/lib/css/index.css';
import './Pricing.css';
import strings from '../../resources/text';

const Pricing = () => {
  const [rateType, setRateType] = useState('hourly');
  const [rate, setRate] = useState(180);
  return (
    <div className="pricing sections">
      <h5 className="pricing-header">{strings.setUpPricing}</h5>
      <p className="sub-strings">{strings.setUpPricingSub}</p>
      <div className="rate-selection">
        <button type="button" className={rateType === 'hourly' ? 'rate-option selected' : 'rate-option'} onClick={() => setRateType('hourly')}>
          <AiOutlineClockCircle size={25} color="blue" />
          <h5>{strings.hourly}</h5>
        </button>
        <button type="button" className={rateType === 'fixed' ? 'rate-option selected' : 'rate-option'} onClick={() => setRateType('fixed')}>
          <AiOutlineFileText size={25} color="blue" />
          <h5>{strings.fixed}</h5>
        </button>
      </div>
      <div className="rate">
        <p>$</p>
        <h2>{rate}</h2>
        <p>/ year</p>
      </div>
      <InputRange
        minValue={20}
        maxValue={300}
        value={rate}
        formatLabel={(value) => `$${value}`}
        onChange={(value) => setRate(value)}
      />
    </div>
  );
};

export default Pricing;
