import React from 'react'
//  import { BrowserRouter as Router, Route, Link, Routes, NavLink,Switch} from 'react-router-dom';
 import { BrowserRouter as Router, Route, Link, Routes,NavLink} from 'react-router-dom';
 import Products from './Products';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';

const NavBar = () => {
return (
<>

<nav class="navbar navbar-expand-lg navbar-light bg-light bg grey py-3">

      <div class="container">
      <a class="navbar-brand fw-bold fs-4" >ESHOP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
                 
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item flex-display-inline">
                 <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to="/Product">PRODUCTS</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to="/About">ABOUT US</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to="/Contact">CONTACT US</NavLink>
            </li>
            </ul>
           
      <div className='buttons  me-2'>
      <NavLink to="/Login" className='btn btn-outline-dark'><i fa fa-sign-in me-1>LOGIN</i></NavLink>
      </div>
      <div className='buttons  me-2'>
      <NavLink to="/Register" className='btn btn-outline-dark'><i fa fa-user-plus me-1>REGISTER</i></NavLink>
      </div>
      <div className='buttons  me-2'>
      <NavLink to="/Cart" className='btn btn-outline-dark'><i fa fa-shopping-cart  me-1>0 CART</i></NavLink>
      </div>
   
     
      </div>
      </div>
     
</nav>
<Routes>
      <Route exact path='/' element={Home} />
<Route path='Contact' element={Contact} />
<Route path='About' element={About} />
<Route path='Products' element={Products} />
<Route path='Register' element={Register} />
<Route path='Login' element={Login} />
<Route path ='Cart'element={Cart} />
      </Routes>
      
                    


</>
)
}

export default NavBar