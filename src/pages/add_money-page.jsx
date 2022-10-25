import Header from "../components/navbar";
import { Link } from "react-router-dom";
import background from "../assets/sphere-grid.svg";

const AddMoney = () => {
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
                    <img class="dashboard-image" src="src\assets\dashboard\dashboard-center-image.svg" />
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
 
export default AddMoney;