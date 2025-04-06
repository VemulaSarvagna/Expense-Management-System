// import React,{useState,useEffect, use} from "react"
// import { useNavigate } from 'react-router-dom';
// import '../../LoginView.css';
// import {generateCategoryId,saveCategory} from '../../Services/CategoryService';

// const CategoryAddition = () => {
//     const  [category,setCategory] = useState({ 
//         categoryId:0,
//         categoryName:'',
//         description:''
//     });

// const [newId,setNewId] = useState(0);

//     let navigate = useNavigate();

//     const setCategoryId = (event) => {
//         generateCategoryId().then((response) => {
//             setNewId(response.data);
//     });
//     }

    
//     useEffect(() => {
//         setCategoryId();
//     }, []);

//     const  onChangeHandler = (event) =>{
//         event.persist();
//         const name = event.target.name;
//             const value = event.target.value;
//            setCategory(values =>({...values, [name]: value }));
//         };

//         const categorySave=(event)=>{
//             event.preventDefault();
//             category.categoryId=newId;
//                saveCategory(category).then((response)=>{
//                        alert("New Category is added");
//                        navigate('/AdminMenu');    
//                      });
//            }

//     return( 
//         <div>
//       <br></br>
//        <div className = "container">
//          <div className = "row">
//             <div className = "card col-md-12 offset-md-3 offset-md-3">
//               <div className = "card-body">
//                 <h2 className="text-center"><u>New Category Addition</u></h2>
//                 <br/>
//                 <form>
//                  <div className = "form-group">
//                    <label>Category Id: </label>
//                    <input placeholder="Category Id" name="categoryId" className="form-control" value={newId} />
//                  </div>
//                  <div className = "form-group">
//                     <label>Category Name: </label>
//                     <input placeholder="Category Name" name="categoryName" className="form-control"
//                                     value={category.categoryName} onChange={onChangeHandler}/>
//                  </div>
//                  <div className = "form-group">
//                     <label>Category Description: </label>
//                     <input placeholder="Category Description" name="description" className="form-control"
//                                     value={category.description} onChange={onChangeHandler}/>
//                  </div>
//                 <button className="btn btn-success" onClick={categorySave}>Save</button>
//              </form>
//              </div>
//       </div>
//     </div>
//   </div>
// </div>
//     );

// }

// export default CategoryAddition;


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import { generateCategoryId, saveCategory } from '../../Services/CategoryService';

const CategoryAddition = () => {
    const [category, setCategory] = useState({
        categoryId: 0,
        categoryName: '',
        description: ''
    });

    const [newId, setNewId] = useState(0);
    let navigate = useNavigate();

    const setCategoryId = () => {
        generateCategoryId().then((response) => {
            setNewId(response.data);
        });
    };

    useEffect(() => {
        setCategoryId();
    }, []);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setCategory(values => ({ ...values, [name]: value }));
    };

    const categorySave = (event) => {
        event.preventDefault();
        category.categoryId = newId;
        saveCategory(category).then(() => {
            alert("New Category is added");
            navigate('/AdminMenu');
        });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">New Category Addition</h2>
                <form>
                    <div className="input-group">
                        <label>Category Id:</label>
                        <input type="text" name="categoryId" value={newId} readOnly />
                    </div>
                    <div className="input-group">
                        <label>Category Name:</label>
                        <input type="text" name="categoryName" value={category.categoryName} onChange={onChangeHandler} />
                    </div>
                    <div className="input-group">
                        <label>Category Description:</label>
                        <input type="text" name="description" value={category.description} onChange={onChangeHandler} />
                    </div>
                    <button className="btn-submit" onClick={categorySave}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default CategoryAddition;