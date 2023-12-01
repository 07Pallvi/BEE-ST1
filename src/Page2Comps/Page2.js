import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import { GlobalProvider } from './GlobalState';

const Page2 = () => {
    return(
        <div className="page2" >
            {/* <img src={TopRight} id='topright'/> */}
            <GlobalProvider>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <AddTransaction/> 
                <TransactionList/>
            </div>
            </GlobalProvider>    
        </div>
    );
}

export default Page2;