import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Skeleton } from 'react-loading-skeleton';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>Loading....</>
    )
  }

  const ShowProduct = () => {
    return (
      <>
        <div className='container'>
          <div className='col-md-6'>
            <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          <div className='col-md-6'>
            <h4 className='text-uppercase text-back-30'>{product.category}</h4>
            <h5 className='display-5'>{product.title}</h5>
            <h6 className='lead'>Rating: {product.rating && product.rating.rate}</h6>
            <i className='fa fa-star'></i>
            <h4 className='display-6 fw-bold my-4'>${product.price}</h4>
            <p className='lead'>{product.description}</p>
            <button className='btn btn-primary px-4 py-2'>ADD TO CART</button>
            <NavLink to={`/Products/${product.id}`} className='btn btn-dark ms-2 px-3'>BUY NOW</NavLink>
          </div>
        </div>
      </>

    )
  }

  return (
    <div className='container'>
      <div className='row'>
        {Loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  )
};

export default Product;
