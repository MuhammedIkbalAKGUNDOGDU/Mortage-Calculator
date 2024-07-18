import React from "react";
import illustrationEmpty from "./assets/illustration-empty.svg";

import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="inner-container-1">
          <div className="inner-container-1-header">
            <h2 className="font-weight-700">Mortgage Calculator</h2>
            <p className="font-weight-700">Clear All</p>
          </div>

          <div className="amount-container">
            <label className="amount-label" htmlFor="mortgage-amount">
              Mortgage Amount
            </label>
            <div className="input-container">
              <input type="text" id="mortgage-amount" name="mortgage-amount" />
            </div>
          </div>

          <div className="term-rate-container">
            <div className="term-rate-container-inner term-rate-container-inner-2">
              <label className="amount-label" htmlFor="mortgage-term">
                Mortgage Term
              </label>
              <div className="input-container-term">
                <input type="text" id="mortgage-term"></input>
              </div>
            </div>

            <div className="term-rate-container-inner">
              <label className="amount-label" htmlFor="mortgage-term">
                Interest Rate
              </label>
              <div className="input-container-term input-container-rate input-container-term-rate">
                <input type="text" id="mortgage-term"></input>
              </div>
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
