import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true); // Set loading state to true before making the API request

      const response = await fetch('https://fakestoreapi.com/products'); // Make the API request

      if (componentMounted) {
        const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
      }
    };
    getProducts(); // Call the getProducts function to fetch data

    return () => {
      componentMounted = false; // Set componentMounted to false when component is unmounted
    };
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
      </>
    );
  };
  const filterProduct = (category) => {
    const updatedList = data.filter((product) => product.category === category);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-2 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
            ALL
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
            MEN'S CLOTHING
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            WOMEN'S CLOTHING
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('electronics')}>
            ELECTRONICS
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('jewelery')}>
            JEWELLERY
          </button>
        </div>
        {filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center py-5 p-6">
            <NavLink to={`/products/${product.id}`}><img src={product.image} className="card-img-top" alt={product.title} height="250px" /></NavLink>
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                <p className="card-text-bold">${product.price}</p>
              </div>
              <div className="card-body lead fw-bold">
               
                <NavLink to={`/products/${product.id}`} className="btn btn-dark">
                  BUY NOW
                </NavLink>
                
              </div>
            </div>
          </div>
        ))}

      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-2">
        <div className="row mt-3">
          <div className="col-12 mb-2">
            <hr></hr>
            <h3 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h3>
          </div>
        </div>
        <div className="row content-justify-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
