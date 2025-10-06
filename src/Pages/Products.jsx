import React, { useState } from "react";
import useProducts from "../Hook/useProducts";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const trims = search.trim().toLocaleLowerCase();
  const searchProducts = trims
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(trims)
      )
    : products;
//   console.log(searchProducts);
  return (
    <div className="container">
      <div className="flex justify-between items-center my-4">
        <div>
          <h1 className="font-bold">
            All Products{" "}
            <span className="text-gray-500">
              {" "}
              {searchProducts.length} products fund
            </span>
          </h1>
        </div>
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Serch"
            className="input"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {searchProducts.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
