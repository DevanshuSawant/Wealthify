import Header from "../components/navbar";
import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import calendar_image from "../assets/calendar/calendar-image.svg";


const Calendar = () => {
    return (
        <div className="template-main-body"
            style={{ backgroundImage: `url(${sphere_background})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000000', }}>
            <div className="template-header"></div>
            <div className="template-container"
                style={{ backgroundImage: `url(${square_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#FFA1DA' }}>
                <div className="template-item">
                    <Header/>
                </div>
                <div className="template-center-image">
                    <img class="template-image" src={calendar_image} />
                </div>
                
            </div>
        </div>
    );
}
 
export default Calendar;