// import './App.css';
// import NavBar from './NavBar';
// import Home from './Home';
// import About from './About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <NavBar />
//     {/* <Home/> */}
    
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
// }

// export default App;
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Product from './Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Footer from './Footer';


function App() {
  return (
    <>
    
      <NavBar />
     
      <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" component={Product} />
          <Route  path="/Contact" element={<Contact />} />
          <Route  path="/Cart" element={<Cart />} />
          <Route  path="/Login" element={<Login />} />
          <Route  path="/Register" element={<Register />} />
          <Route  path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
      <Footer/>
     
    </>
  );
}

export default App;

