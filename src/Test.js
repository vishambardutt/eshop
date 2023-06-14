import React from 'react'
import {Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
const Test = () => {
  return (
    <div>
      <Link to="/" element ={<Home/>}>Home</Link>&nbsp;
       <Link to="/About" element ={<About/>}>About</Link>
      </div>
  )
}

export default Test