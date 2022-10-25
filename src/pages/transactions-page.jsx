import Header from "../components/navbar";
import sphere_background from "../assets/sphere-grid.svg";
import transactions_image from "../assets/transactions/transaction_image.svg";


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
                    <Header/>
                </div>
                <div className="template-center-image">
                    <img class="template-image" src={transactions_image} />
                </div>
                
            </div>
        </div>
    );
}
 
export default Transactions;