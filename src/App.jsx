import React from "react";
import "./App.css";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./components/ProductList";

const products = [
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

function App() {
  const addToCart = (product) => {
    // Implement logid to add a product to the cart
  };

  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart />
    </>
  );
}

export default App;
