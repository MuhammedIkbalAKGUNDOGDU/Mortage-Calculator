import React from "react";
import illustrationEmpty from "./assets/illustration-empty.svg" 
const App = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="inner-container-1">

        </div>
        <div className="inner-container-2">
          <img className="inner-container-2-svg"src={illustrationEmpty} alt="" />
          <h1>Result Shown Here</h1>
          <p>Complete the form and click "calculate repayment" to see what your monthly repayments would be</p>
        </div>
      </div>
    </div>
  );
};

export default App;
