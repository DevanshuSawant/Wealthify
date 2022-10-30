import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import transactions_icon from "../assets/navbar/navbar-transactions-icon.svg"
import home_icon from "../assets/navbar/navbar-home-icon.svg"
import wallet_icon from "../assets/navbar/navbar-wallet-icon.svg"
import { Link } from "react-router-dom";
import  BarChart  from "../components/BarChart.jsx"
import { collection, getDocs, doc, getDoc, where, orderBy, limit, query } from "firebase/firestore";
import { db,auth } from "../utils/firebase.js";
import React,{useState,useEffect} from 'react';


const Reports = () => {

  const [expenses, setExpenses] = useState([]);
  const expensesRef = query(collection(db, auth.currentUser.uid), where("category", "<", "2" )); //expense has 1 in the first index

  useEffect(() => {
      const getExpenses = async () => {
          const expenses = await getDocs(expensesRef);
          // console.log(expenses.docs.map((doc) => doc.data()));
          setExpenses(expenses.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      getExpenses();
  }, []);

  console.log(expenses.map((expense) => expense.price))

  const expensesChart = {
      labels: expenses.map((expense) => expense.type),
      datasets: [{
          label: "Expenses",
          data: expenses.map((expense) => expense.price),
      }]
  }
  
    return (
        <div className="template-main-body"
        style={{ backgroundImage: `url(${sphere_background})`,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#98fe87', }}>
            <div className="template-header"></div>
            <div className="template-container"
                style={{ backgroundImage: `url(${square_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#FF5C5C', }}>
                <div className="template-item">
                  <div className="navbar-flex">
                    <div className="navbar-items">
                        <Link to="/">
                        <img className="navbar-icon" src={home_icon} />
                        </Link>
                      </div>
                      <div className="navbar-items">
                        <Link to="/transactions">
                          <img className="navbar-icon" src={transactions_icon} />
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
                        <h1 className="template-center-image-header-text">REPORTS</h1>
                    </div>
                    <div className="template-center-image-body" style={{position: "relative", margin: "auto", width: "60vw" }}>
                        <BarChart chartData={expensesChart} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Reports;