import React from 'react';

import { GlobalContext } from "../Context/GlobalState";

function Balance() {
    const { transections } = React.useContext(GlobalContext);
    const amount = transections.map(transection => transection.amount);
    const total = amount.reduce((acc, item) => {
        return acc = acc + item;
    }, 0)
    console.log(total, "Amount");
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance
