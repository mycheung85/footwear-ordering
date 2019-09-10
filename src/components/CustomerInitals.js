import React from "react";
import PropTypes from "prop-types";

export default function CustomerInitals({ customerInitals }) {
  return <div className="customerInitals">{customerInitals}</div>;
}

CustomerInitals.propTypes = {
  customerInitals: PropTypes.string
};
