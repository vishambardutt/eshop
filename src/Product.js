import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
      let {id} = useParams();
      let [product,setProduct] = useState([]);
      let [loading, setLoading] = useState(false);

      useEffect(() => {
            let getProducts = async () => {
                  setLoading(true);
                  let response = await fetch('https://fakestoreapi.com/products/$id');
                  
                        setPdata(await response.clone().json());
                        setProduct(await response.json());
                        setLoading(false);
                        

                  
                  return () => {
                        componentMounted = false;
                  }
            }
            getProducts()

      }, [input]);
      let Loading = () =>{
            return (
                  <>
                  Loading...
                  </>
            )
      }
      let ShowProduct = () =>{
            return (
                  <>
                  <div className='col-md-6'>
                        <img src={product.image} alt={product.title} height="400px" width="400px"/>
                  </div>
                  </>
            )
      }
  return (
    <div className='container'>
      <div className='row'>
            {loading? <loading/>:<ShowProduct/>}
      </div>
      Product</div>
  )
}

export default Product