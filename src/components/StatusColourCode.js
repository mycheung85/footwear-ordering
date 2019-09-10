import React from "react";
import PropTypes from "prop-types";
import colourLookUp from "./statusLookUp";

const StatusColourCode = ({ status }) => {
  const statusNoSpaces = status
    ? status.toLowerCase().replace(/\s/g, "")
    : null;

  return (
    <div
      className="status-box"
      style={{ backgroundColor: colourLookUp[statusNoSpaces] }}
    ></div>
  );
};

export default StatusColourCode;

StatusColourCode.prototype = {
  statusNoSpaces: PropTypes.bool
};
