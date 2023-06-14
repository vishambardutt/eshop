import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import Products from './Products';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
import PageNotFound from './PageNotFound';

const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow p-3 mb-5 bg-white rounded">
  <div className="container">
    <NavLink to="/" className="navbar-brand fw-bold sf-4 cursor-pointer" >ESHOP</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-12">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link" >PRODUCTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About" className="nav-link" >ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="nav-link" >CONTACT</NavLink>
        </li>
      
        
      </ul>
      <div className="button">
       
        <NavLink to ="/login" className='btn btn-outline-dark'>
            <i className='fa fa-sign-in me-1 ' />LOGIN</NavLink>
            <NavLink to="/register" className='btn btn-outline-dark ms-2'>
            <i className='fa fa-user-plus me-1 ms-2' />REGISTER</NavLink>
            <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
            <i className='fa fa-cart-plus me-1' />CART (10)</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBar;
