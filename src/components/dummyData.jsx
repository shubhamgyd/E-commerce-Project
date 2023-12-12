import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const GettingProducts = () => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts

    // If you need to clean up (cancel the fetch) when the component unmounts,
    // you can return a cleanup function from useEffect.
    return () => {
      // Any cleanup code can go here
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Render the component based on the fetched data
  return (
    <div>
      {fetchedData ? (
        <div>
          <ProductList product={fetchedData}></ProductList>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GettingProducts;
