import React from 'react';
import { GlobalContext } from "../Context/GlobalState";
function Transection({transection}) {
    const { removeTransection } = React.useContext(GlobalContext);
    
    const sign = transection.amount > 0 ? '+' : '-';
    return (
        <div>
          <li className={transection.amount < 0 ? "minus" : "plus"}>
            {transection.text} <span>{sign}${Math.abs(transection.amount)}</span>
            <button className="delete-btn" onClick={() => removeTransection(transection.id)}>x</button>
          </li>
     
        </div>
    )
}

export default Transection
