// import React, { useState, useEffect } from "react";
// import {  useParams,useNavigate } from "react-router-dom";
// import { saveExpense, generateExpenseById } from "../../Services/ExpenseService";
// import { getCustomerByUsername,getCustomerStatusByUsername } from "../../Services/CustomerService";
// import {displayCategoryById} from '../../Services/CategoryService';
// import "../../LoginView.css";

// const CategoryExpenseEntry = () => {
//     const { categoryId } = useParams(); 
//     console.log("Received categoryId:", categoryId);
//     const [expense, setExpense] = useState({
//         expenseId: "",
//         customerId: "",
//         categoryId: "", 
//         expenseDate: "",
//         amount: "",
//         description: "",
//     });
//      const [category,setCategory]=useState([]);
//     const [customer, setCustomer] = useState({ });
//     const [newId, setNewId] = useState("");
//     const [errors, setErrors] = useState({});
//     let navigate = useNavigate();
    

//     const setCustomerData = () => {
//         getCustomerByUsername().then((response) => {
//             if(!response.data){
//                 alert("Please Complete Your Customer Registration.");
//                 navigate('/CustomerMenu'); 
                
//             }else{
//                 setCustomer(response.data);
//             }
//         });
        
//     };

//     const setExpenseId = () => {
//         generateExpenseById().then((response) => {
//             setNewId(response.data);
//         });
//     };
//      const setCategoryData=()=>{
//         displayCategoryById(categoryId).then((response) => {
//             setCategory(response.data); 
//             setExpense((prevExpense) => ({
//                 ...prevExpense,
//                 categoryId: response.data.categoryId, 
//             }));
//         });
//      };

//      const checkStatus = () => {
//                  getCustomerStatusByUsername().then(response => {
//                      console.log(response.data);
//                      if (response.data ===  false) {
//                          alert("Customer is inactive. Please activate the account.");
//                          navigate('/custCategoryList'); 
//                      } else {
//                          setExpenseId();
//                      }
//                  });
//              };
     

//     // useEffect(() => {
//     //     checkStatus();
//     //     setCustomerData();
//     //     setCategoryData();
//     // }, [categoryId]);

//     const returnBack = () => {
//         navigate("/custCategoryList");
//     };


//     useEffect(() => {
//         if (!categoryId || categoryId === "undefined") {
//             alert("Invalid Category ID. Redirecting...");
//             navigate("/custCategoryList");
//             return;
//         }
    
//         checkStatus();
//         setCustomerData();
//         setCategoryData();
//     }, [categoryId]);
    



//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;
//         setExpense((values) => ({ ...values, [name]: value }));
//     };

//     const expenseSave = (event) => {
//         event.preventDefault();
//         if (!validateForm()) return;
        
//         const updatedExpense = {
//             ...expense,
//             expenseId: newId,
//             customerId: customer.customerId,
//             categoryId: category.categoryId,
//         };
        
//         saveExpense(updatedExpense).then(() => {
//             alert("New Expense is added");
//             navigate("/CustomerMenu");
//         });
//     };

//     const validateForm = () => {
//         let formErrors = {};
//         if (!expense.expenseDate.trim()) {
//             formErrors.expenseDate = "Expense Date is required!";
//         }
//         if (!expense.amount.trim()) {
//             formErrors.amount = "Expense Amount is required!";
//         }
//         if (!expense.description.trim()) {
//             formErrors.description = "Expense Description is required!";
//         }
//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0;
//     };

//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="card-body">
//                     <h2 className="text-center"><u>Expense Entry</u></h2>
//                     <br />
//                     <form>
//                         <div className="form-group">
//                             <label>Expense Id: </label>
//                             <input placeholder="Expense Id" name="expenseId" className="form-control" value={newId} readOnly />
//                         </div>
//                         <div className="form-group">
//                             <label>Customer Id: </label>
//                             <input placeholder="Customer Id" name="customerId" className="form-control" value={customer.customerId} readOnly />
//                         </div>
//                         <div className="form-group">
//                             <label>Category Id: </label>
//                             <input placeholder="Category Id" name="categoryId" className="form-control" value={expense.categoryId} readOnly />
//                         </div>
//                         <div className="form-group">
//                             <label>Date: </label>
//                             <input type="date" name="expenseDate" className="form-control" value={expense.expenseDate} onChange={onChangeHandler} />
//                             {errors.expenseDate && <p style={{ color: "red" }}>{errors.expenseDate}</p>}
//                         </div>
//                         <div className="form-group">
//                             <label>Amount: </label>
//                             <input placeholder="Expense Amount" name="amount" className="form-control" value={expense.amount} onChange={onChangeHandler} />
//                             {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
//                         </div>
//                         <div className="form-group">
//                             <label>Description: </label>
//                             <input placeholder="Expense Description" name="description" className="form-control" value={expense.description} onChange={onChangeHandler} />
//                             {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
//                         </div>
//                         <button type="submit" className="btn btn-success w-100 mt-3" onClick={expenseSave}>Save</button>
//                         <button type="button" className="btn btn-success w-100 mt-3" onClick={returnBack}>Return</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryExpenseEntry;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { saveExpense, generateExpenseById } from "../../Services/ExpenseService";
import { getCustomerByUsername, getCustomerStatusByUsername } from "../../Services/CustomerService";
import { displayCategoryById } from '../../Services/CategoryService';
import "../../LoginView.css";

const CategoryExpenseEntry = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    console.log("Received category ID from URL:", categoryId);
 

    const [expense, setExpense] = useState({
        expenseId: "",
        customerId: "",
        categoryId: "", 
        expenseDate: "",
        amount: "",
        description: "",
    });

    const [category, setCategory] = useState({});
    const [customer, setCustomer] = useState({});
    const [newId, setNewId] = useState("");
    const [errors, setErrors] = useState({});

    const setCustomerData = () => {
        getCustomerByUsername().then((response) => {
            if (!response.data) {
                alert("Please Complete Your Customer Registration.");
                navigate('/CustomerMenu');
            } else {
                setCustomer(response.data);
            }
        });
    };

    const setExpenseId = () => {
        generateExpenseById().then((response) => {
            setNewId(response.data);
        });
    };

    const setCategoryData = () => {
        const id = Number(categoryId); // convert string to number
        if (!isNaN(id)) {
            displayCategoryById(id).then((response) => {
                setCategory(response.data);
                setExpense((prev) => ({
                    ...prev,
                    categoryId: response.data.categoryId,
                }));
            }).catch((error) => {
                console.error("Error fetching category:", error);
                alert("Invalid category ID.");
                navigate("/CustomerMenu");
            });
        } else {
            alert("Invalid category ID format.");
            navigate("/CustomerMenu");
        }
    };

    const checkStatus = () => {
        getCustomerStatusByUsername().then(response => {
            if (response.data === false) {
                alert("Customer is inactive. Please activate the account.");
                navigate('/custCategoryList');
            } else {
                setExpenseId();
            }
        });
    };

    useEffect(() => {
        if (categoryId) {
            console.log("✅ Received categoryId from URL:", categoryId);
            checkStatus();
            setCustomerData();
            setCategoryData();
        }
    }, [categoryId]);

    const returnBack = () => {
        navigate("/custCategoryList");
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setExpense((prev) => ({ ...prev, [name]: value }));
    };

    const expenseSave = (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const updatedExpense = {
            ...expense,
            expenseId: newId,
            customerId: customer.customerId,
            categoryId: category.categoryId,
        };

        saveExpense(updatedExpense).then(() => {
            alert("New Expense is added");
            navigate("/CustomerMenu");
        });
    };

    const validateForm = () => {
        const formErrors = {};
        if (!expense.expenseDate.trim()) formErrors.expenseDate = "Expense Date is required!";
        if (!expense.amount.trim()) formErrors.amount = "Expense Amount is required!";
        if (!expense.description.trim()) formErrors.description = "Expense Description is required!";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center"><u>Expense Entry</u></h2>
                    <form>
                        <div className="form-group">
                            <label>Expense Id: </label>
                            <input name="expenseId" className="form-control" value={newId} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Customer Id: </label>
                            <input name="customerId" className="form-control" value={customer.customerId || ""} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Category Name: </label>
                            <input name="categoryName" className="form-control" value={category.categoryName || ""} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <input type="date" name="expenseDate" className="form-control" value={expense.expenseDate} onChange={onChangeHandler} />
                            {errors.expenseDate && <p style={{ color: "red" }}>{errors.expenseDate}</p>}
                        </div>
                        <div className="form-group">
                            <label>Amount: </label>
                            <input name="amount" className="form-control" value={expense.amount} onChange={onChangeHandler} />
                            {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input name="description" className="form-control" value={expense.description} onChange={onChangeHandler} />
                            {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-3" onClick={expenseSave}>Save</button>
                        <button type="button" className="btn btn-secondary w-100 mt-3" onClick={returnBack}>Return</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryExpenseEntry;
