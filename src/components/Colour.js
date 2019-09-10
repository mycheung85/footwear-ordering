import React from "react";

export default function Colour({ colour }) {
  return (
    <div className="colour">
      <p>Colour:</p>
      <p>{colour}</p>
    </div>
  );
}
