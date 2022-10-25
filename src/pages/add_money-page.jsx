import Header from "../components/navbar";
import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import dashboard_center_image from "../assets/addexpense/add_expense.svg";


const AddMoney = () => {
    return (
        <div className="template-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', }}>
            <div className="template-header"></div>
            <div className="template-container"
                style={{ backgroundImage: `url(${square_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#ffa1da' }}>
                <div className="template-item">
                    <Header/>
                </div>
                <div className="template-center-image">
                    <img class="template-image" src={dashboard_center_image} />
                </div>
                
            </div>
        </div>
    );
}
 
export default AddMoney;