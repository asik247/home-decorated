import React from "react";

const WishList2 = ({ product }) => {
//   console.log(product);
const {id,category,name,price,image,description} = product;
  return (
    <div>
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
           {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList2;
