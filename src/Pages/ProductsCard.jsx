import React from "react";
import { Link } from "react-router";
import { addToStroedDB } from "../Utillity/AddProductsDB";

const ProductsCard = ({ product }) => {
//   console.log(product);
const {id,category,name,price,image} = product;

const handleWishList = (id)=>{
  // console.log(id)
  addToStroedDB(id)

}
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          price: $ {price}
        </p>
        <p>
          category: $ {category}
        </p>
        <div className="card-actions justify-end">


          <button onClick={()=>handleWishList(id)} className="btn">Add Wish List</button>


        </div>
        {/* <div className="card-actions justify-end">
          <Link to={"/wishList"} className="btn">Go ToWish List</Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsCard;
