import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeCurrency = (selectedCurrency) => {
    dispatch({
      type: 'SET_CURRENCY',
      payload: selectedCurrency
    });
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="currency-select">
          Currency
        </label>
      </div>
      <select
        className="custom-select"
        id="currency-select"
        value={currency}
        onChange={(e) => changeCurrency(e.target.value)}
      >
        <option value="$">USD - United States dollar</option>
        <option value="£">GBP - British pound</option>
        <option value="€">EUR - Euro</option>
        <option value="₹">INR - Indian rupee</option>
      </select>
    </div>
  );
};

export default Currency;
