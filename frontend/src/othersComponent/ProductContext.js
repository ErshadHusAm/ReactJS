import React from "react";

// 1st Step
const ProductContext = React.createContext('Laptop');

// 2nd Step 
const ProductProvider = ProductContext.Provider;

// 3rd Step
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
export default ProductContext;