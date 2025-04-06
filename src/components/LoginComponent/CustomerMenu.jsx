import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../AdminView.css';
const CustomerMenu = () => {
    const navigate = useNavigate();
    const [isCustomerOpen, setIsCustomerOpen] = useState(false);
    const [isExpenseOpen, setIsExpenseOpen] = useState(false);

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Customer Panel</h2>
                <button className="menu-button" onClick={() => setIsCustomerOpen(!isCustomerOpen)}>
                    Customer {isCustomerOpen ? "▲" : "▼"}
                </button>
                
                {isCustomerOpen && (
                    <div className="sub-menu">
                        <button className="sub-button" onClick={() => navigate("/CustomerAddition")}>➤ Customer Registration</button>
                        <button className="sub-button" onClick={() => navigate("/CustomerDetails")}>➤ Customer Details</button>
                        {/* <button className="sub-button" onClick={() => navigate("/current-customer")}>➤ Current Customer</button> */}
                    </div>
                )}
                
                {/* Category Dropdown */}
                <button className="menu-button" onClick={() => setIsExpenseOpen(!isExpenseOpen)}>
                    Expense {isExpenseOpen ? "▲" : "▼"}
                </button>
                
                {isExpenseOpen && (
                    <div className="sub-menu">
                        <button className="sub-button" onClick={() => navigate("/ExpenseEntry")}>➤ Expense Entry</button>
                        <button className="sub-button" onClick={() => navigate("/ExpenseList")}>➤ Expense List</button>
                        <button className="sub-button" onClick={() => navigate("/custCategoryList")}>➤ Category List</button>
                        <button className="sub-button" onClick={() => navigate("/ExpenseAnalysis")}>➤ Expense Report</button>
                    </div>
                )}

                <button className="menu-button logout" onClick={() => navigate("/")}>Logout</button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Welcome to the Customer Dashboard</h1>
                <p>Select an option from the left panel.</p>
            </div>
        </div>
    );
};

export default CustomerMenu;
