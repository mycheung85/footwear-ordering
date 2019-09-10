import React from "react";

export default function Category({ category }) {
  return (
    <div className="size">
      <p>Category:</p>
      <p>{category}</p>
    </div>
  );
}
