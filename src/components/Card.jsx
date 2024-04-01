import React from "react";

const Card = ({ code, rate }) => {
  return (
    <div className="card">
      <h1>{code}</h1>
      <p>{rate}</p>
    </div>
  );
};

export default Card;
