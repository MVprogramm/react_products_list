import React from "react";

import "./cartTitle.scss";

const CartTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">{userName}, you added {count} items</div>
  );
}

export default CartTitle;
