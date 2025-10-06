import React, { useEffect, useState } from 'react';
import useProducts from '../Hook/useProducts';
import { getStroedProducts, removeFromStoredDB } from '../Utillity/AddProductsDB';
import WishList2 from './WishList2';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const WishList = () => {
    
const {products} = useProducts()
const [WishList,setWishList] = useState([]);
// console.log(products)
const [sort,setSort] = useState('none');

useEffect(()=>{
    const addToStroedDB = getStroedProducts()
    // console.log(addToStroedDB)
    const myStroedProducts = products.filter(item=>addToStroedDB.includes(item.id))
    setWishList(myStroedProducts)
    // console.log(myStroedProducts)
},[products])


// Remove stored data functio...

const handleRemove = (id)=>{
    removeFromStoredDB(id);
    const remaining = WishList.filter(p=>p.id!==id);
    setWishList(remaining);
}

const getSortedItems = ()=>{
    let sorted = [...WishList];
    if(sort === 'price-asc'){
        sorted.sort((a,b)=>a.price-b.price);
    }
    else if(sort === 'price-dsc'){
        sorted.sort((a,b)=>b.price-a.price)
    }
    return sorted
}
const sortedList = getSortedItems()
    return(
       <div className='container'>
        <div className='flex justify-between items-center my-4'>
            <div>
                <h1>All Wish Lish {WishList.length}</h1>
            </div>
            <div>
                <select value={sort} onChange={e=>setSort(e.target.value)}>

                    <option value="none">Sort by price</option>
                    <option value="price-asc">Low to high</option>
                    <option value="price-dsc">High to low</option>
                </select>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5 my-5'>
            {
                sortedList.map(product=><WishList2 product={product} key={product.id} handleRemove={handleRemove}></WishList2>)
            }
        </div>
        <div className='font-bold flex justify-center items-center my-8'>
           

             <BarChart
            width={600}
            height={400}
            data={WishList}
            // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="id" fill="#8884d8" />
          </BarChart>
        </div>

       </div>
  );
};

export default WishList;