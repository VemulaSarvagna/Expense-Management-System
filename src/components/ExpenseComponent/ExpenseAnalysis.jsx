// import React ,{useState,useEffect, use} from "react";
// import {getExpenseReportByCustomer,deleteExpenseById} from '../../Services/ExpenseService';
// import { useNavigate } from "react-router-dom";
// import '../../LoginView.css';

// const ExpenseAnalysis=()=>{
//     let navigate=useNavigate();
//     const [CustomerExpenses,setCustomerExpense]=useState([]);

//     const setExpenseCustomerData = () => {
//         getExpenseReportByCustomer().then((response) => {
//                 setCustomerExpense(response.data);
//         });
//     };

//     useEffect(() => {
//         setExpenseCustomerData();
//     }
//     , []);

//     const returnBack=()=>{
//         navigate('/CustomerMenu'); 
//     }

//     return (
//         <div className="text-center">
//         <div>
//             <h2 className="text-center">Expense Analysis </h2>
//              <hr style={{height: "3px", borderWidth:0, color:"yellow", backgroundColor:"red"}}/>
//               <div className = "row">
//               <table className = "table table-striped table-bordered">
//                <thead>
//                <tr>
//                  <th> Category Id</th>
//                  <th> Amount</th>

//               </tr>
//               </thead>
//               <tbody>
//                  {
//                     CustomerExpenses.map((expense, index) => (
//                       <tr key = {expense.categoryId}>
//                       <td>{expense.categoryId}</td>
//                       <td>{expense.amount}</td>
//                       </tr>
//                   ) )
//                }                        
//          </tbody>
//         </table>
//         <br/>
//          <button style={{marginLeft: "10px"}} onClick={()=>returnBack()} className="btn btn-success">Return</button>    
//        </div>
//      </div>
//                </div>
//     );
// }
// export default ExpenseAnalysis;


import React, { useState, useEffect } from "react";
import { getExpenseReportByCustomer } from "../../Services/ExpenseService";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import "../../LoginView.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FFF"]; // Colors for different categories

const ExpenseAnalysis = () => {
    let navigate = useNavigate();
    const [CustomerExpenses, setCustomerExpense] = useState([]);

    useEffect(() => {
        getExpenseReportByCustomer()
            .then((response) => {
                console.log("Fetched Expenses: ", response.data); // Debugging
                setCustomerExpense(response.data);
            })
            .catch((error) => {
                console.error("Error fetching expenses:", error);
            });
    }, []);

    const returnBack = () => {
        navigate("/CustomerMenu");
    };

    return (
        <div className="text-center">
            <h2>Expense Analysis</h2>
            <hr style={{ height: "3px", borderWidth: 0, color: "yellow", backgroundColor: "red" }} />
            <div className="row">
                {CustomerExpenses.length > 0 ? (
                    <PieChart width={400} height={400}>
                    <Pie
                        data={CustomerExpenses}
                        dataKey="amount"
                        nameKey="categoryId"
                        cx="50%" // Centers the PieChart horizontally
                        cy="50%" // Centers the PieChart vertically
                        innerRadius={50}
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    >
                        {CustomerExpenses.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>


                

                
                ) : (
                    <p>No expense data available.</p>
                )}
                <br />
                <button style={{ marginLeft: "10px" }} onClick={returnBack} className="btn btn-success">
                    Return
                </button>
            </div>
        </div>
    );
};

export default ExpenseAnalysis;
