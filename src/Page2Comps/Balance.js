import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    const sign = total<0 ? '-' : '+';

    return(
        <div className="balance">
            <h3 className="m-2"> YOUR BALANCE </h3>
            <h2 className= { total < 0 ? 'negbalance':'posbalance'} > {sign} Rs {Math.abs(total)} </h2>
        </div>
    );
}

export default Balance;