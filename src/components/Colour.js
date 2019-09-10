import React from "react";
import PropTypes from "prop-types";

export default function Colour({ colour }) {
  return (
    <div className="colour">
      <p>Colour:</p>
      <p>{colour}</p>
    </div>
  );
}

Colour.propTypes = {
  colour: PropTypes.string
};
