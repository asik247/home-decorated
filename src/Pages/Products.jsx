import React from 'react';
import useProducts from '../Hook/useProducts';
import ProductsCard from './ProductsCard';

const Products = () => {
    const {products} = useProducts()
    // console.log(products)
    return (
        <div className='container'>
             <div className='flex justify-between items-center my-4'>
                <div>
                <h1 className='font-bold'>All Products <span className='text-gray-500'> {products.length} products fund</span></h1>
                </div>
                <div>
               <input type="search" placeholder="Serch" className="input" />
                </div>
            </div>
           <div className='grid md:grid-cols-4 gap-5'>
            {
                products.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
            }
           </div>
        </div>
    );
};

export default Products;