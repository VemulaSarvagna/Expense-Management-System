// import React,{useState} from "react"

 
// import { useNavigate } from 'react-router-dom';
// import '../../LoginView.css';
// import {registerNewUser} from '../../Services/LoginService';
 
//  const RegisterUser = () => {

//     const [expenseUser, setExpenseUser] = useState({
//             username:"",
//             password:"",
//             email:"",
//             category:"",
//     });

//     const [password2, setPassword2] = useState("");
//     let navigate = useNavigate();
    
//     const saveNewUser = (event) => {
//         event.preventDefault();
//         if(expenseUser.password.length<5 || expenseUser.password.length>10){
//             alert("Password must be between 5 to 10 characters long");
//             return;
//         }
//        if(expenseUser.password===password2){
//              registerNewUser(expenseUser).then((respose)=>{
//                alert("User is registered successfully...Go For Login");
//                navigate('/Login');    
//              });
//         }
//         else{
//              alert("Passwords are not matched");
//             return;
//         }
//       };    

//       const  onChangeHandler = (event) =>{
//         event.persist();
//         const name = event.target.name;
//             const value = event.target.value;
//            setExpenseUser(values =>({...values, [name]: value }));
//         };
     

//       return(
//         <div>
//             <br/>
//             <div className = ".container">
//                 <div className = "row">
//                     <div className = "card col-md-2 offset-md-3 offset-md-3">
//                         <div className = "login-box">
//                             <h2 className="text-center"><u>New User Registration</u> </h2>
//                             <br/>
//                             <form  method="post">
//                                 <div className = "form-group">
//                                     <label>User Name: </label>
//                                     <input placeholder="username" name="username" className="form-control"
//                                         value={expenseUser.username} onChange={(event) => onChangeHandler(event)} />
//                                 </div>
//                                 <div className = "form-group">
//                                     <label>Password: </label>
//                                     <input type="password"   name="password" className="form-control"
//                                     value={expenseUser.password} onChange={(event) => onChangeHandler(event)}/>
//                                 </div>
//                                 <div className = "form-group">
//                                     <label>Retype/Confirm Password: </label>
//                                     <input type="password"   name="password2" className="form-control"
//                                     value={password2} onChange={(event) =>setPassword2(event.target.value)}/>
//                                 </div>
//                                 <div className = "form-group">
//                                     <label>User Email: </label>
//                                     <input placeholder="email" name="email" className="form-control"
//                                     value={expenseUser.email} onChange={(event) => onChangeHandler(event)} />
//                                 </div>
//                                 <div className = "form-group">
//                                     <label>Select Category : </label>
//                                     <input list="types"  name="category" className="form-control"
//                                     value={expenseUser.category} onChange={(event) => onChangeHandler(event)} />
//                                     <datalist id="types">
//                                       <option value="Customer"/>
//                                     <option value="Admin"/>
//                                    </datalist>
//                                 </div>
//                                 <br/>
//                                 <button className='btn btn-primary' onClick={ (e) => saveNewUser(e)}>Submit</button>
//                             </form>
//                         </div>
//                  </div>
//             </div>
//        </div>
//     </div>    
//       );
//  }
 
//  export default RegisterUser;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import { registerNewUser } from '../../Services/LoginService';

const RegisterUser = () => {
    const [expenseUser, setExpenseUser] = useState({
        username: "",
        password: "",
        email: "",
        category: "",
    });

    const [password2, setPassword2] = useState("");
    let navigate = useNavigate();

    const saveNewUser = (event) => {
        event.preventDefault();
        if (expenseUser.password.length < 5 || expenseUser.password.length > 10) {
            alert("Password must be between 5 to 10 characters long");
            return;
        }
        if (expenseUser.password === password2) {
            registerNewUser(expenseUser).then((response) => {
                alert("User is registered successfully...Go For Login");
                navigate('/Login');
            });
        } else {
            alert("Passwords are not matched");
        }
    };

    const onChangeHandler = (event) => {
        event.persist();
        const { name, value } = event.target;
        setExpenseUser((values) => ({ ...values, [name]: value }));
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">New User Registration</h2>
                <form method="post">
                    <div className="input-group">
                        <label>Username:</label>
                        <input type="text" placeholder="Enter username" name="username"
                            value={expenseUser.username} onChange={onChangeHandler} />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter password" name="password"
                            value={expenseUser.password} onChange={onChangeHandler} />
                    </div>
                    <div className="input-group">
                        <label>Retype/Confirm Password:</label>
                        <input type="password" placeholder="Confirm password" name="password2"
                            value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Email:</label>
                        <input type="email" placeholder="Enter email" name="email"
                            value={expenseUser.email} onChange={onChangeHandler} />
                    </div>
                    <div className="input-group">
                        <label>Select Category:</label>
                        <input list="types" name="category"
                            value={expenseUser.category} onChange={onChangeHandler} />
                        <datalist id="types">
                            <option value="Customer" />
                            <option value="Admin" />
                        </datalist>
                    </div>
                    <button className="btn-submit" onClick={saveNewUser}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;
