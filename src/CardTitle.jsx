import React from "react";

import "./cardTitle.scss";

const CardTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">{userName}, you added {count} items</div>
  );
}

export default CardTitle;
