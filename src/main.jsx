import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard-page.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Login from "./pages/login";
import Transactions from "./pages/transactions-page.jsx";
import AddMoney from "./pages/add_money-page.jsx";
import Reports from "./pages/reports-page.jsx";
import Calendar from "./pages/calendar-page.jsx";
import PrivateRoutes from "./utils/private-routes.jsx";
import "./styles.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route 
            path="/" 
            element={<Dashboard/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/reports"
            element={<Reports/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/transactions"
            element={<Transactions/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/add-money"
            element={<AddMoney/>}
            errorElement={<ErrorPage/>}
          /> 
          <Route
            path="/transactions"
            element={<Transactions/>}
            errorElement={<ErrorPage/>}
          /> 
          <Route
            path="/calendar"
            element={<Calendar/>}
            errorElement={<ErrorPage/>}
          /> 
        </Route>    
        <Route
          path="/login"
          element={localStorage.getItem('isAuth') ? <Navigate to='/'/> : <Login />}
          errorElement={<ErrorPage/>}
        />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
