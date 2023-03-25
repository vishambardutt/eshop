import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';


const Products = () => {
      let [pdata, setPdata] = useState([]);
      let [filter, setFilter] = useState(pdata);
      let [loading, setLoading] = useState(false);


      let componentMounted = true;

      useEffect(() => {
            let getProducts = async () => {
                  setLoading(true);
                  let response = await fetch('https://fakestoreapi.com/products')
                  if (componentMounted) {
                        setPdata(await response.clone().json());
                        setFilter(await response.json());
                        setLoading(false);
                        console.log(filter);

                  }
                  return () => {
                        componentMounted = false;
                  }
            }
            getProducts()

      }, [])

      let Loading = () => {
            return (
                  <>
                     <div className='col-md-3'><Skeleton/></div>   
                  </>
            );
      };
      let ProductFilter =(cat) =>{
            let upDateList = pdata.filter ((x)=> x.catgory === cat);
            setFilter(upDateList);
      }
      let ShowProducts = () => {
            return (
                  <>
                        <div className='button d-flex jusify-content-center'>
                              <button className='btn btn-outline-dark me-2'onClick={()=>setFilter(pdata)}>ALL</button>
                              <button className='btn btn-outline-dark me-2'onClick={()=>ProductFilter("men's clothing")}>MEN'S CLOTHING</button>
                              <button className='btn btn-outline-dark me-2' onClick={()=>ProductFilter("women's clothing")}>WOMEN'S CLOTHING</button>
                              <button className='btn btn-outline-dark me-2'onClick={()=>ProductFilter('electronics')}>ELECTRONICS</button>
                              <button className='btn btn-outline-dark me-2'onClick={()=>ProductFilter('jewellery')}>JEWELLERY</button>
                        </div>
                        {filter.map((product) => {
                              return (
                                    <>
                                          <div className='col-md-3 mb-4'>
                                                <div class="card h-100 text-center py-5 pt-6" key={product.id}>
                                                      <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                                            <div class="card-body">
                                                                  <h5 class="card-title mb-0" >{product.title.substring(0,12)}</h5>
                                                                  <p class="card-text">${product.price} </p>
                                                            </div>
                                                           
                                                            <div class="card-body lead fw-bold">
                                                                  <a href="#" className='btn btn-outline dark'>BUY NOW</a>
                                                                  
                                                            </div>
                                                </div>
                                          </div>

                                    </>
                              )
                        })}
                  </>
            );
      };


      return (
            <div>
                  <div className='container my-5 py-5'>
                        <div className='row mt-6'>
                              <div className='col-12 mb-5'>
                                    <h3 className='display-6 fw-bolder text-center'>LATEST PRODUCTS</h3>
                              </div>
                        </div>
                        <div className='row content-justify-center'>
                              {loading ? <Loading /> : <ShowProducts />}
                        </div>
                  </div>
            </div>
      )
}

export default Products