import React, { useEffect, useState } from 'react';
import useProducts from '../Hook/useProducts';
import { getStroedProducts } from '../Utillity/AddProductsDB';
import WishList2 from './WishList2';


const WishList = () => {
    
const {products} = useProducts()
const [WishList,setWishList] = useState([]);
// console.log(products)

useEffect(()=>{
    const addToStroedDB = getStroedProducts()
    // console.log(addToStroedDB)
    const myStroedProducts = products.filter(item=>addToStroedDB.includes(item.id))
    setWishList(myStroedProducts)
    // console.log(myStroedProducts)
},[products])

   
    return (
       <div className='container'>
        <div className='grid md:grid-cols-2 gap-5 my-5'>
            {
                WishList.map(product=><WishList2 product={product} key={product.id}></WishList2>)
            }
        </div>
       </div>
  );
};

export default WishList;