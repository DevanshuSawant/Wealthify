import Header from "../components/navbar";
import sphere_background from "../assets/sphere-grid.svg";
import square_background from "../assets/square-grid.svg";
import { useState } from "react";
import { db, auth } from "../utils/firebase.js";
import { serverTimestamp,addDoc,collection } from "firebase/firestore"; 



const AddMoney = () => {
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [comment, setComment] = useState("");
    const [type, setType] = useState("");

    
    const submit = (e) => {
        e.preventDefault();
        addDoc(collection(db, auth.currentUser.uid), {
            category: category,
            date: date,
            price: price,
            type: type,
            comment: comment,
            currenttime: serverTimestamp(),
        });
        setCategory("");
        setPrice("");
        setDate("");
        setComment("");
        setType("");
    };
    
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
                backgroundColor: '#ffa1da' }}
            >
                <div className="template-item">
                    <Header/>
                </div>
                <div className="template-center-image" style={{backgroundColor: "#fff7b3"}}>
                    <div className="template-center-image-header">
                        <h1 className="template-center-image-header-text">ADD TRANSACTION</h1>
                    </div>
                    <div className="addmoney-box-container">
                        <label for="CATEGORY" className="addmoney-label-1 add-money-label" >CATEGORY:</label>
                        <select className="addmoney-input-a addmoney-input" name="CATEGORY" onChange={(e) => setCategory(e.target.value)} >
                            <option className="addmoney-input-expense" value="FOOD" selected>FOOD</option>
                            <option className="addmoney-input-expense" value="TRANSPORT">TRANSPORT</option>
                            <option className="addmoney-input-expense" value="STATIONARY">STATIONARY</option>
                            <option className="addmoney-input-expense" value="CLOTHING">CLOTHING</option>
                            <option className="addmoney-input-expense" value="GROCERY">GROCERY</option>
                            <option className="addmoney-input-expense" value="RENT">RENT</option>
                            <option className="addmoney-input-expense" value="OTHERS-EXPENSES">OTHER-EXPENSES</option>

                            <option className="addmoney-input-income" value="SALARY">SALARY</option>
                            <option className="addmoney-input-income" value="BONUS">BONUS</option>
                            <option className="addmoney-input-income" value="INTEREST">INTEREST</option>
                            <option className="addmoney-input-income" value="GIFT">GIFT</option>
                            <option className="addmoney-input-income" value="OTHERS-INCOMES">OTHERS-INCOMES</option>
                        </select>
                        <label for="PRICE" className="addmoney-label-2 add-money-label" >PRICE:</label>
                        <input 
                            className="addmoney-input-b addmoney-input"
                            label="Price"
                            type="number"
                            placeholder="PRICE"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label for="DATE" className="addmoney-label-3 add-money-label">DATE:</label>
                        <input
                            className="addmoney-input-c addmoney-input"
                            label="Date"
                            type="date"
                            placeholder="DATE"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label for="COMMENT" className="addmoney-label-4 add-money-label">COMMENT:</label>
                        <input
                            className="addmoney-input-d addmoney-input"
                            label="Comment"
                            type="text"
                            placeholder="COMMENT"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <label for="TYPE" className="addmoney-label-5 add-money-label">TYPE:</label>
                        <input 
                            className="addmoney-input-e addmoney-input"
                            type= "text"
                            label="TYPE"
                            name="TYPE" 
                            value= {type}
                            onChange={(e) => setType(e.target.value)}  
                        />
                        {/* <input 
                            className="addmoney-input-e1 addmoney-input-expense"
                            type= "radio"
                            label="EXPENSE"
                            name="EXPENSE" 
                            value="EXPENSE"
                            onChange={(e) => setType(e.target.value)}  
                        />
                        <input 
                            className="addmoney-input-e2 addmoney-input-income"
                            type= "radio"
                            label="INCOME"
                            name="INCOME" 
                            value="INCOME"
                            onChange={(e) => setType(e.target.value)}  
                        /> */}
                        <button onClick={submit} className="addmoney-submit" >+</button>
                    </div>    
                </div>
            </div>
        </div>
    );
}
 
export default AddMoney;