import React from "react";
import { Link } from "react-router";

const HomeProduct = ({ product }) => {
//   console.log(product);
const {category,name,price,image} = product;
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
         category:  {category}
        </p>
        <div className="card-actions justify-end">
         <Link className="btn" to={""}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
