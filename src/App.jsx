import React, { useState } from "react";
import illustrationEmpty from "./assets/illustration-empty.svg";
import calculateimg from "./assets/icon-calculator.svg";

import Button from "react-bootstrap/Button";

const App = () => {
  const [amountempty, setamountempty] = useState(false);
  const [termtempty, settermtempty] = useState(false);
  const [rateempty, setrateempty] = useState(false);
  const [checkedempty, setcheckedempty] = useState(false);

  const [isCalculated, setIsCalculated] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(true);
    setIsChecked2(false);
  };

  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange2 = () => {
    setIsChecked(false);
    setIsChecked2(true);
  };

  const [month, setmonth] = useState(0);
  const [year, setyear] = useState(0);

  const calculate = () => {
    if (
      mortgageTerm != "" &&
      mortgageAmount != "" &&
      interestRate != "" &&
      (isChecked != false || isChecked2 != false)
    ) {
      var principal = mortgageAmount;
      var years = mortgageTerm;
      var interestRate2 = interestRate / 100;

      var monthlyInterestRate = interestRate2 / 12;
      var numberOfPayments = years * 12;
      var monthlyPayment = 0;
      var totalPayment = 0;

      if (isChecked) {
        // Monthly payment for repayment mortgage
        monthlyPayment =
          (principal * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        totalPayment = monthlyPayment * numberOfPayments;
      } else if (isChecked2) {
        // Monthly payment for interest only mortgage
        monthlyPayment = principal * monthlyInterestRate;
        totalPayment = monthlyPayment * numberOfPayments + principal;
      }

      setmonth(monthlyPayment.toFixed(2));
      setyear(totalPayment.toFixed(2));
      setIsCalculated(true);

      setamountempty(false);
      settermtempty(false);
      setrateempty(false);
      setcheckedempty(false);
    } else {
      setamountempty(false);
      settermtempty(false);
      setrateempty(false);
      setcheckedempty(false);
      setIsCalculated(false)
      if (mortgageAmount == "") {
        setamountempty(true);
      }
      if (mortgageTerm == "") {
        settermtempty(true);
      }
      if (interestRate == "") {
        setrateempty(true);
      }
      if (isChecked == false && isChecked2 == false) {
        setcheckedempty(true);
      }
    }
  };

  // Clear All işlevi
  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setIsChecked(false);
    setIsChecked2(false);
    setIsCalculated(false);
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
            <div className={`input-container ${
                amountempty ? "amounthempty" : ""
              }`}>
              <input
                type="text"
                id="mortgage-amount"
                className={`${
                  amountempty ? "amounthempty" : ""
                }`}
                name="mortgage-amount"
                value={mortgageAmount}
                onChange={(e) => setMortgageAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="term-rate-container">
            <div className="term-rate-container-inner term-rate-container-inner-2">
              <label className="amount-label">Mortgage Term</label>
              <div className={`input-container-term ${termtempty ? "termempty" : ""}`}>
                <input
                  type="text"
                  id="mortgage-term"
                  className={`${termtempty ? "termempty" : ""}`}
                  value={mortgageTerm}
                  onChange={(e) => setMortgageTerm(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="term-rate-container-inner">
              <label className="amount-label">Interest Rate</label>
              <div className={` input-container-rate  ${rateempty ? "termempty" : ""}`}>
                <input
                  type="text"
                  id="mortgage-term"
                  className={`${rateempty ? "termempty" : ""}`}
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
              } ${checkedempty ? "checkedempty" : ""}`}
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
              }${checkedempty ? "checkedempty" : ""}`}
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
          {isCalculated ? (
            <>
              <div className="inner-container-2-inner">
                <div className="repayment-info">
                  <h2>Your Result</h2>
                  <p>
                    Your result are shown below on the information you
                    provided.To adjust the result, edit the form and click
                    "calculate repayments" again
                  </p>
                </div>
                <div className="repayment-container">
                  <p className="payment-p">Your Monthly Repayments</p>
                  <h1>£{month}</h1>
                  <p className="payment-p">
                    Totally you'll repay over the term
                  </p>
                  <h2>£{year}</h2>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                className="inner-container-2-svg"
                src={illustrationEmpty}
                alt=""
              />
              <h1>Result Shown Here</h1>
              <p>
                Complete the form and click "calculate repayment" to see what
                your monthly repayments would be
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
