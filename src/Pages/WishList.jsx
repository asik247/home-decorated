import React, { useEffect, useState } from 'react';
import useProducts from '../Hook/useProducts';
import { getStroedProudcts } from '../Utillity/AddProductsDB';

const WishList = () => {
    const {products} = useProducts()
    const [adProduct,setAdProduct] = useState([]);

    useEffect(()=>{
        const stroedId = getStroedProudcts();
        const savedProducts = products.filter((p)=>stroedId.includes(p.id));
        setAdProduct(savedProducts);

    },[products])
   
    return (
        <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">My Wish List</h1>

      {adProduct.length === 0 ? (
        <p>No products in wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adProduct.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-md">
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;