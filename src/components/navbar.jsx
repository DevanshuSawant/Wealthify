import { Link } from "react-router-dom";
import transactions_icon from "../assets/navbar/navbar-transactions-icon.svg"
import reports_icon from "../assets/navbar/navbar-reports-icon.svg"
import wallet_icon from "../assets/navbar/navbar-wallet-icon.svg"

function Header() {
  return (
    <div className="navbar-flex">
      <div className="navbar-items">
        <Link to="/transactions">
          <img className="navbar-icon" src={transactions_icon} />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/reports">
        <img className="navbar-icon" src={reports_icon} />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/wallet">
        <img className="navbar-icon" src={wallet_icon} />
        </Link>
      </div>
    </div>
  );
}

export default Header;