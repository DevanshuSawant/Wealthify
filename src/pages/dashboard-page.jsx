import Header from "../components/navbar";
import { Link } from "react-router-dom";
import background from "../assets/sphere-grid.svg";
import dashboard_center_image from "../assets/dashboard/dashboard-center-image.svg";

const Dashboard = () => {
    return (
        <div className="dashboard-main-body"
            style={{ backgroundImage: `url(${background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', }}>
            <div className="dashboard-header"></div>
            <div className="dashboard-container">
                <div className="dashboard-item">
                    <Header/>
                </div>
                <div className="dashboard-center-image">
                    <img class="dashboard-image" src={dashboard_center_image} />
                </div>
                <div className="dashboard-flex-item-addmoney">
                    <Link to="/add-money" className="links">
                        <div className="add-money">
                            <h4 className="add-money-text">ADD MONEY</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;