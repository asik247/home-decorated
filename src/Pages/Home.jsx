import React from 'react';
import useProducts from '../Hook/useProducts';
import HomeProduct from './HomeProduct';
import { Link } from 'react-router';
import { PacmanLoader } from 'react-spinners';

const Home = () => {
    const {products,loading} = useProducts()
    const featuredProducts = products.slice(0,6)
    if (loading) return <div className='flex justify-center items-end my-10'><PacmanLoader size={30} color='pink' ></PacmanLoader></div> ;
    // console.log(products)
    return (
        <div className='container'>
            <div className='md:flex justify-between items-center my-5 text-center'>
                <div>
                <h1 className='font-bold'>Featured Products</h1>
                </div>
                <div>
                <Link className='btn' to={'/products'}>See All Products</Link>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                 {
                featuredProducts.map(product=><HomeProduct key={product.id} product={product}></HomeProduct>)
            }
            </div>
           
        </div>
    );
};

export default Home;