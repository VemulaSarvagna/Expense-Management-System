// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AdminMenu = () => {
//     let navigate = useNavigate();

//     const handleAddCategoryPage = () => {
//         navigate("/CategoryAddition");
//     };

//     const handleAddCategoryList = () => {
//         navigate("/CategoryList");
//     };

//     return (
//         <div>
//             <h1>Manage Categories</h1>
//             <button onClick={handleAddCategoryPage}>Add New Category</button>
//             <button onClick={handleAddCategoryList}>Category List</button>
//         </div>
//     );
// };

// export default AdminMenu;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AdminMenu = () => {
//     let navigate = useNavigate();

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>

//             {/* Expense Management */}
//             <button onClick={() => navigate("/Expense")}>Expense</button>

//             {/* Category Management */}
//             <div>
//                 <h2>Category</h2>
//                 <button onClick={() => navigate("/CategoryAddition")}>Add Category</button>
//                 <button onClick={() => navigate("/CategoryList")}>Category List</button>
//             </div>

//             {/* Reports */}
//             <button onClick={() => navigate("/Report")}>Report</button>

//             {/* Logout */}
//             <button onClick={() => navigate("/")}>Logout</button>
//         </div>
//     );
// };

// export default AdminMenu;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../AdminView.css';
const AdminMenu = () => {
    const navigate = useNavigate();
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isCustomerOpen, setIsCustomerOpen] = useState(false);

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <button className="menu-button" onClick={() => setIsCustomerOpen(!isCustomerOpen)}>
                    Customer {isCustomerOpen ? "▲" : "▼"}
                </button>
                
                {isCustomerOpen && (
                    <div className="sub-menu">
                        {/* <button className="sub-button" onClick={() => navigate("/CustomerAddition")}>➤ Customer Registration</button> */}
                        <button className="sub-button" onClick={() => navigate("/CustomerList")}>➤ Customer List</button>
                        <button className="sub-button" onClick={() => navigate("/current-customer")}>➤ Current Customer List</button>
                    </div>
                )}
                
                {/* Category Dropdown */}
                <button className="menu-button" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                    Category {isCategoryOpen ? "▲" : "▼"}
                </button>
                
                {isCategoryOpen && (
                    <div className="sub-menu">
                        <button className="sub-button" onClick={() => navigate("/CategoryAddition")}>➤ Add Category</button>
                        <button className="sub-button" onClick={() => navigate("/CategoryList")}>➤ Category List</button>
                    </div>
                )}

                <button className="menu-button" onClick={() => navigate("/Report")}>Expense Report</button>
                <button className="menu-button logout" onClick={() => navigate("/")}>Logout</button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>
                <p>Select an option from the left panel.</p>
            </div>
        </div>
    );
};

export default AdminMenu;



