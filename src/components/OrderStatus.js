import React from "react";
import propTypes from "prop-types";
import "../styles/orderStaus.css";

export default function Status({ handleClick }) {
  // console.log(props);
  const productStatus = [
    { status: "Ready to Pay", colour: "green" },
    { status: "On the Way", colour: "blue" },
    { status: "In the Queue", colour: "orange" },
    { status: "Out of Stock", colour: "red" }
  ];
  return (
    <div className="buttonColourStatus">
      {productStatus.map(buttonStatus => {
        return (
          <button
            key={buttonStatus.id}
            className="buttonColourStatus"
            style={{ backgroundColor: buttonStatus.colour }}
            onClick={e => handleClick(e)}
            value={buttonStatus.status}
          >
            {buttonStatus.status}
          </button>
        );
      })}
    </div>
  );
}

Status.propTypes = {
  handleClick: propTypes.func.isRequired
};
