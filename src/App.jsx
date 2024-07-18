import React, { useState } from "react";
import illustrationEmpty from "./assets/illustration-empty.svg";
import calculateimg from "./assets/icon-calculator.svg";

import Button from "react-bootstrap/Button";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(true);
    setIsChecked2(false);
  };

  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange2 = () => {
    setIsChecked(false);
    setIsChecked2(true);
  };

  const calculate = () => {
    console.log("selam");
  };

  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  // Clear All işlevi
  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setIsChecked(false);
    setIsChecked2(false);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div className="inner-container-1">
          <div className="inner-container-1-header">
            <h2 className="font-weight-700">Mortgage Calculator</h2>
            <p onClick={clearAll} className="font-weight-700">
              Clear All
            </p>
          </div>

          <div className="amount-container">
            <label className="amount-label">Mortgage Amount</label>
            <div className="input-container">
              <input
                type="text"
                id="mortgage-amount"
                name="mortgage-amount"
                value={mortgageAmount}
                onChange={(e) => setMortgageAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="term-rate-container">
            <div className="term-rate-container-inner term-rate-container-inner-2">
              <label className="amount-label">Mortgage Term</label>
              <div className="input-container-term">
                <input
                  type="text"
                  id="mortgage-term"
                  value={mortgageTerm}
                  onChange={(e) => setMortgageTerm(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="term-rate-container-inner">
              <label className="amount-label">Interest Rate</label>
              <div className="input-container-term input-container-rate input-container-term-rate">
                <input
                  type="text"
                  id="mortgage-term"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="radiobutton-container">
            <label className="radio-label">Mortgage Type</label>
            <div
              onClick={handleChange}
              className={`font-weight-700 radio-container ${
                isChecked ? "checked" : ""
              }`}
            >
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                checked={isChecked}
                onChange={handleChange}
              />
              <label>REPAYMENT</label>
            </div>
            <div
              onClick={handleChange2}
              className={`font-weight-700 radio-container ${
                isChecked2 ? "checked2" : ""
              }`}
            >
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
                checked={isChecked2}
                onChange={handleChange2}
              />
              <label>INTEREST ONLY</label>
            </div>
          </div>

          <div className="button-container">
            <div onClick={calculate} className="button-container-1">
              <img src={calculateimg}></img>

              <div className="font-weight-700">Calculate Repayments</div>
            </div>
          </div>
        </div>
        <div className="inner-container-2">
          <img
            className="inner-container-2-svg"
            src={illustrationEmpty}
            alt=""
          />
          <h1>Result Shown Here</h1>
          <p>
            Complete the form and click "calculate repayment" to see what your
            monthly repayments would be
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
