import React from "react";

import "./productsList.scss";

const ProductsList = (props) => {
  const productsList = props.cartItems.map(
    (cart) => {
      return (
        <li className="products__list-item" key={cart.id}>
          <span className="products__item-name">{cart.name}</span>
          <span className="products__item-price">${cart.price}</span>
        </li>
      )
  });

  const productsTotal = props.cartItems.reduce((acc, cart) => (acc = acc + cart.price), 0);

  return (
    <div className="products">
      <ul className="products__list">
        {productsList}
      </ul>
      <div className="products__total">Total: ${productsTotal}</div>
    </div>
  );
}

export default ProductsList;
