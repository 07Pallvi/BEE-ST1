import React, {useContext, useEffect} from "react";
import { GlobalContext } from "./GlobalState";

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);

    useEffect(() => {
    }, []);


    return(
        <>
        <h3 className="line"> HISTORY </h3>
        <div className="history">

        <ul id="list" className="list">

            {transactions.map(transaction => (
                
                <li className= {transaction.amount < 0 ? 'minus':'plus'}>
                <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}> x </button>
                <span className="datenow"> {transaction.date} </span> <br/>
                <span> {transaction.text} </span>  {transaction.amount}
                <br/>
                </li>
            ))}
        </ul>
        </div>
        </>
    );
}

export default TransactionList;