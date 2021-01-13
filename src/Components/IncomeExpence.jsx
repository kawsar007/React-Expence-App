import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";

function IncomeExpence() {
    const { transections } = useContext(GlobalContext);
    const amount = transections.map(transection => transection.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    const expense = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
  
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpence
