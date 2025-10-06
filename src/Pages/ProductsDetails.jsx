import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hook/useProducts";

const ProductsDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === id);

  const { name, image, price,description } = product || {};

//   console.log(product);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{price}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
