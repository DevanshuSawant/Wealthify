import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import reports_image from "../assets/reports/reports-image.svg";
import transactions_icon from "../assets/navbar/navbar-transactions-icon.svg"
import home_icon from "../assets/navbar/navbar-home-icon.svg"
import calendar_icon from "../assets/navbar/navbar-calendar-icon.svg"
import { Link } from "react-router-dom";


const Reports = () => {
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
                        <Link to="/calendar">
                        <img className="navbar-icon" src={calendar_icon} />
                        </Link>
                      </div>
                  </div>
                </div>
                <div className="template-center-image"
                style={{ backgroundImage: `url(${reports_image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',}}>
                    <h1>Reports</h1>
                </div>
            </div>
        </div>
    );
}
 
export default Reports;