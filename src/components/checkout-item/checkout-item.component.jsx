import React from "react";

const CheckoutItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CheckoutItem;
