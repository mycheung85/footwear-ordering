import React from "react";

export default function Model({ product }) {
  return (
    <div className="itemModel">
      <h1>{product.productMake}</h1>
      <h1>{product.productLine}</h1>
      <h1>{product.productModel}</h1>
    </div>
  );
}
