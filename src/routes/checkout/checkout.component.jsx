import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
