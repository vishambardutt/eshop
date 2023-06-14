import React from 'react'
import Products from './Products'
// import img1 from '/assets/image-1.jpg';
const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white">
  <img src='assets/image-1.jpg' className="card-img" alt="image1" height="450"/>
  <div className='card-img-overlay d-flex  flex-column justify-content-center'>
      <div className='container'>
      <h5 className='card-title display-3 fw-bolder mb-0'>NEW ARRIVALS</h5>
    <p className='card-text lead fs-2'>CHECK OUT ALL TRENDINGS</p>

      </div>
  </div>
</div>
<Products/>
    </div>
  )
}

export default Home