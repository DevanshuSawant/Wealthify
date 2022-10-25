import Header from "../components/navbar";
import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import reports_image from "../assets/reports/reports-image.svg";


const Reports = () => {
    return (
        <div className="template-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#78FF51', }}>
            <div className="template-header"></div>
            <div className="template-container"
                style={{ backgroundImage: `url(${square_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#FF5C5C', }}>
                <div className="template-item">
                    <Header/>
                </div>
                <div className="template-center-image">
                    <img class="template-image" src={reports_image}/>
                </div>
                
            </div>
        </div>
    );
}
 
export default Reports;