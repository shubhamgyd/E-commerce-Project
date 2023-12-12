import React from "react";
import Product from "./Product";

function ProductList() {
  let products = [
    {
      id: 1,
      title: "IPhone",
      description: "It is a brandnew phone",
      price: "333",
    },
    {
      id: 2,
      title: "Watch",
      description: "It is a brandnew watch",
      price: "100",
    },
  ];
  const addToCart = () => {};
  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
