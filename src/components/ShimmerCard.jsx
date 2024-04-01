import React from "react";
import "../App.css";

const ShimmerCard = () => {
  return Array(3)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="shimmer_card">
        <h1></h1>
        <p></p>
      </div>
    ));
};

export default ShimmerCard;
