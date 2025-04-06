import React,{useState,useEffect, use} from "react"
import { Link, useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import {displayAllCategories, generateCategoryId,saveCategory} from '../../Services/CategoryService';


const CategoryList = () => {

    const [categories,setCategories] = useState([]);

    const setCategoryData = () => {
        displayAllCategories().then((response) => {
            setCategories(response.data);
        });
    }

     let navigate = useNavigate();

     useEffect(() => {
             setCategoryData();
         }, []);
        
    const returnBack = () => {
        navigate('/AdminMenu');
    }

    const removeCategory = (id) => {
        alert("Category is removed");
    }

    return(
        <div className="text-center">
    <h2 className="text-center">Category List</h2>
    <hr style={{ height: "3px", borderWidth: 0, color: "yellow", backgroundColor: "red" }} />

    {/* Scrollable container to prevent page overflow */}
    <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Category Id</th>
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Update Category</th>
                    <th>Delete Category</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category, index) => (
                    <tr key={category.categoryId}>
                        <td>{category.categoryId}</td>
                        <td>{category.categoryName}</td>
                        <td>{category.description}</td>
                        <td>
                            <Link to={`/CategoryUpdate/${category.categoryId}`}>
                                <button style={{ marginLeft: "10px" }} className="btn btn-info">Update</button>
                            </Link>
                        </td>
                        <td>
                            <button style={{ marginLeft: "10px" }} onClick={() => removeCategory(category.categoryId)} className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    <br />
    <button style={{ marginLeft: "10px" }} onClick={() => returnBack()} className="btn btn-success">Return</button>
</div>

    );
}

export default CategoryList;