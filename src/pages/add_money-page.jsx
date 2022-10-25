import Header from "../components/navbar";
import { Link } from "react-router-dom";
import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";


const AddMoney = () => {
    return (
        <div className="addmoney-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', }}>
            <div className="addmoney-header"></div>
            <div className="addmoney-container"
                style={{ backgroundImage: `url(${square_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', }}>
                <div className="addmoney-item">
                    <Header/>
                </div>
                <div className="addmoney-center-image">
                    <img class="addmoney-image" src="src\assets\dashboard\dashboard-center-image.svg" />
                </div>
                
            </div>
        </div>
    );
}
 
export default AddMoney;