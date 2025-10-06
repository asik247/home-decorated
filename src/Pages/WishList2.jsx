import React from "react";

const WishList2 = ({ product,handleRemove}) => {
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
          <div className="card-actions flex justify-center items-center">
            <button className="btn ">{price}</button>
            <button onClick={()=>handleRemove(id)} className="btn ">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList2;
