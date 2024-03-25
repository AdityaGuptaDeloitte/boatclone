import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import BoatCrud from './components/BoatCrud';
import Register from './components/Register';
import Products from './components/Products';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import Logout from './components/Logout';
import { Provider, connect } from 'react-redux';
import Footer from './components/Footer';
import CartPage from './cart/CartPage';
import store from './cart/CartStore';
import UserProtectedRoute from './components/UserProtectedRoute';
import OrdersPage from './components/OrdersPage';

store.dispatch({type: "CREATE", payload: []});

let routing = (
  <Router>
    <Navbar/>

    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/BoatCrud' element={
        <AdminProtectedRoute returnUrl='/BoatCrud'>
          <BoatCrud/>
        </AdminProtectedRoute>
      }/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/Cart' element={<CartPage/>}/>
      <Route path='/Orders' element={
        <UserProtectedRoute returnUrl='/Orders'>
          <OrdersPage/>
        </UserProtectedRoute>
      }/>
    </Routes>
  </Router>
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {routing}
      <Footer/>
     </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
