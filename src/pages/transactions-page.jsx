import sphere_background from "../assets/sphere-grid.svg";
import transactions_image from "../assets/transactions/transaction_image.svg";
import home_icon from "../assets/navbar/navbar-home-icon.svg"
import reports_icon from "../assets/navbar/navbar-reports-icon.svg"
import calendar_icon from "../assets/navbar/navbar-calendar-icon.svg"
import { Link } from "react-router-dom";


const Transactions = () => {
    return (
        <div className="template-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ff90ff' }}>
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
                            <Link to="/calendar">
                            <img className="navbar-icon" src={calendar_icon} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="template-center-image"
                style={{ backgroundImage: `url(${transactions_image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',}}>
                    <h1>Reports</h1>
                </div>
                
            </div>
        </div>
    );
}
 
export default Transactions;