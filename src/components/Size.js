import React from "react";
import PropTypes from "prop-types";

export default function Size({ size }) {
  return (
    <div className="size">
      <p>Size:</p>
      <p>{size}</p>
    </div>
  );
}

Size.propTypes = {
  size: PropTypes.number
};
