import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item), 0);

    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += Math.abs(item)), 0);

    return(
        <>
        <div className="displaymoney"> 
            <div className="part">
                <h3 className="m-2"> INCOME </h3>
                <h3 className="money plus"> Rs {income} </h3>
            </div>
            <div className="part">
                <h3 className="m-2"> EXPENSE </h3>
                <h3 className="money minus"> Rs {expense} </h3>
            </div>
        </div>
        </>
    );
}

export default IncomeExpense;