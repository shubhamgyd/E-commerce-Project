import React, { useRef } from 'react';

const ProductDetails = ({product}) => {
  const quickViewRef = useRef();

  const openQuickView = () => {
    // Implement logic to display a modal or quick view
  };

  return (
    <div className='product-details'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={openQuickView}>Quick View</button>
    </div>
  )
}