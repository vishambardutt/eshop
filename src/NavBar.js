import React from 'react'

const NavBar = () => {
return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light bg grey py-3 shadow-sm">
      <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="#">ESHOP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
            </li>
            </ul>
      <div className='buttons'>
            <a href='' className='btn btn-outline-dark'><i fa fa-sign-in me-1>LOGIN</i></a>
      </div>
      <div className='buttons'>
            <a href='' className='btn btn-outline-dark'><i fa fa-user-plus me-1>REGISTER</i></a>
      </div>
      <div className='buttons'>
            <a href='' className='btn btn-outline-dark'><i fa fa-shopping-cart  me-1>0 CART</i></a>
      </div>
      </div>
      </div>
</nav>
</>
)
}

export default NavBar