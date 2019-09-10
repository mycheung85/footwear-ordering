import React from "react";
import Model from "./Model";
import Category from "./Category";
import Size from "./Size";
import Colour from "./Colour";
import CustomerInitals from "./CustomerInitals";
import StatusColourCode from "./StatusColourCode";
import "../styles/productList.css";

function List({ productData }) {
  return productData.map(product => {
    return (
      <div className="list-page" key={product.id}>
        <div className="list-item" key={product.id}>
          <StatusColourCode status={product.status} />
          <Model product={product} />
          <Size size={product.size} />
          <Colour colour={product.colour} />
          <Category category={product.category} />
          <CustomerInitals customerInitals={product.customerInitals} />
        </div>
      </div>
    );
  });
}

export default List;
