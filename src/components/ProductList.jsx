import React from 'react';
import Product from './Product';

function ProductList({products}) {
    const addToCart =() => {

    }
    return (
        <div >
            <h2>Product Catalog</h2>
            <div className="product-list">
                {console.log(JSON.stringify(products))}
                {products.map((product) => (<Product product={product} addToCart={addToCart} />))}
            </div>
        </div>
    )
}

export default ProductList;