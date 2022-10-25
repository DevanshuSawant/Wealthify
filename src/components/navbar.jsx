import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar-flex">
      <div className="navbar-items">
        <Link to="/transactions">
          <img className="navbar-icon" src="src/assets/navbar/navbar-transactions-icon.svg" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/reports">
        <img className="navbar-icon" src="src/assets/navbar/navbar-reports-icon.svg" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/calendar">
        <img className="navbar-icon" src="src/assets/navbar/navbar-calendar-icon.svg" />
        </Link>
      </div>
    </div>
  );
}

export default Header;