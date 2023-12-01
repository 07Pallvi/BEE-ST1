import React, {useReducer, createContext, useEffect} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const[state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (storedTransactions) {
            dispatch({
                type: 'SET_TRANSACTIONS',
                payload: storedTransactions
            });
        }
    }, []);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); 
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
        const transactions = state.transactions.concat(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    return(<GlobalContext.Provider value= {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }
    }>
        {children}
    </GlobalContext.Provider>);
}