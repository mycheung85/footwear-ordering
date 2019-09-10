import React from "react";
import PropTypes from "prop-types";

export default function Category({ category }) {
  return (
    <div className="size">
      <p>Category:</p>
      <p>{category}</p>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.number
};
