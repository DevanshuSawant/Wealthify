import sphere_background from "../assets/sphere-grid-black.svg";
import home_icon from "../assets/navbar/navbar-home-icon.svg"
import reports_icon from "../assets/navbar/navbar-reports-icon.svg"
import wallet_icon from "../assets/navbar/navbar-wallet-icon.svg"
import { Link } from "react-router-dom";
import { collection, getDocs, where, orderBy, limit, query } from "firebase/firestore";
import { db,auth } from "../utils/firebase.js";
import React,{useState,useEffect} from 'react';





const Transactions = () => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const incomesRef = query(collection(db, auth.currentUser.uid), where("type", "==", "income" ), orderBy("date"), limit(10));
    const expensesRef = query(collection(db, auth.currentUser.uid), where("type", "==", "expense" ), orderBy("date"), limit(10));


    useEffect(() => {
        const getIncomes = async () => {
            const incomes = await getDocs(incomesRef);
            console.log(incomes.docs.map((doc) => doc.data()));
            setIncomes(incomes.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getIncomes();
    }, []);

    useEffect(() => {
        const getExpenses = async () => {
            const expenses = await getDocs(expensesRef);
            console.log(expenses.docs.map((doc) => doc.data()));
            setExpenses(expenses.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getExpenses();
    }, []);

    return (
        <div className="template-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f2b5d4' }}>
            <div className="template-header"></div>
            <div className="template-container"
                style={{ backgroundColor: '#9affed' }}>
                <div className="template-item" >
                    <div className="navbar-flex">
                        <div className="navbar-items">
                            <Link to="/">
                            <img className="navbar-icon" src={home_icon} />
                            </Link>
                        </div>
                        <div className="navbar-items">
                            <Link to="/reports">
                            <img className="navbar-icon" src={reports_icon} />
                            </Link>
                        </div>
                        <div className="navbar-items">
                            <Link to="/wallet">
                            <img className="navbar-icon" src={wallet_icon} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="template-center-image">
                    <div className="template-center-image-header">
                        <h1 className="template-center-image-header-text">TRANSACTIONS</h1>
                    </div>

                    <div className="transactions-table">
                        <div className="transactions-table-header-a">
                            <div className="transactions-table-header-income ">
                                <h1 className="transactions-table-header-text">INCOME</h1>
                            </div>
                            <div>
                                <h3 className="transactions-table-data">
                                    {incomes.map((income) => {
                                        return (<div>{income.category.replace('-', '').replace('2', '')}</div>);
                                    })}
                                </h3>
                                <h3 className="transactions-table-amount transactions-table-income">
                                    {incomes.map((income) => {
                                        return (<div>{"₹ "+income.price}</div>);
                                    })}
                                </h3>
                            </div>
                        </div>
                        <div className="transactions-table-header-b">
                            <div className="transactions-table-header-expense">
                                <h1 className="transactions-table-header-text">EXPENSE</h1>
                            </div>
                            <div>
                                <h3 className="transactions-table-data">
                                    {expenses.map((expense) => {
                                        return (<div>{expense.category.replace('-', '').replace('1', '')}</div>);
                                    })}
                                </h3>
                                <h3 className="transactions-table-amount transactions-table-expense">
                                    {expenses.map((expense) => {
                                        return (<div>{"₹ "+expense.price}</div>);
                                    })}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Transactions;