import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginComponent/LoginPage';
import RegisterUser from './components/LoginComponent/RegisterUser';
import AdminMenu from './components/LoginComponent/AdminMenu';
import CustomerMenu from './components/LoginComponent/CustomerMenu';
import CategoryAddition from './components/CategoryComponent/CategoryAddition';
import CategoryList from './components/CategoryComponent/CategoryList';
import CategoryUpdate from './components/CategoryComponent/CategoryUpdate';
import CustomerAddition from './components/CustomerComponent/CustomerAddition';
import CustomerList from './components/CustomerComponent/CustomerList';
import CustomerUpdation from './components/CustomerComponent/CustomerUpdation';
import CurrentCustomer from './components/CustomerComponent/CurrentCustomer'
import HomePage from './components/HomePageComponent/HomePage';
import ExpenseEntry from './components/ExpenseComponent/ExpenseEntry';
import CustomerDetails from './components/CustomerComponent/CustomerDetails';
import CustomerCategoryList from './components/CategoryComponent/CustomerCategoryList';
import ExpenseList from './components/ExpenseComponent/ExpenseList';
import CategoryExpenseEntry from './components/ExpenseComponent/CategoryExpenseEntry';
import ExpenseAnalysis from './components/ExpenseComponent/ExpenseAnalysis';
import ExpenseUpdate from './components/ExpenseComponent/ExpenseUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Register' element={<RegisterUser /> }/>
        <Route path='/AdminMenu' exact element={<AdminMenu/>}/>
        <Route path='/CustomerMenu' element={<CustomerMenu/>}/>
        <Route path='/CategoryAddition' element={<CategoryAddition/>}/>
        <Route path='/CategoryList' element={<CategoryList/>}/>
        <Route path='/CategoryUpdate/:id' element={<CategoryUpdate/>}/>
        <Route path='/CustomerAddition' element={<CustomerAddition/>}/>
        <Route path='/CustomerList' element={<CustomerList/>}/>
        <Route path="/customer-update/:id" element={<CustomerUpdation />} />
        <Route path='/current-customer' element={<CurrentCustomer/>}/>
        <Route path='/ExpenseEntry' element={<ExpenseEntry/>}/>
        <Route path='/CustomerDetails' element={<CustomerDetails/>}/>
        <Route path='/custCategoryList' element={<CustomerCategoryList/>}/>
        <Route path='/CategoryExpenseList/:id' element={<CategoryExpenseEntry/>}/>     
        <Route path='/ExpenseList' element={<ExpenseList/>}/>
        <Route path='/ExpenseAnalysis' element={<ExpenseAnalysis/>}/>
        <Route path='/ExpenseUpdate/:id' element={<ExpenseUpdate/>}/>
    
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
