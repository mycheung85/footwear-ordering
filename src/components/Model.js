import React from "react";
import PropTypes from "prop-types";

export default function Model({ product }) {
  return (
    <div className="itemModel">
      <h1>{product.productMake}</h1>
      <h1>{product.productLine}</h1>
      <h1>{product.productModel}</h1>
    </div>
  );
}

Model.propTypes = {
  product: PropTypes.string
};
