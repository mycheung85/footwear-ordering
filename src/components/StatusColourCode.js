import React from "react";
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
