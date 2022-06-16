import React from "react";
import CartTitle from "./CartTitle.jsx";
import ProductsList from "./ProductsList.jsx";

import "./column.scss";

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
    ],
  };
     
  render() {
    const { firstName } = this.props.userData;
    const count = this.state.cartItems.length;
    
    return (
      <div className="column">
        <CartTitle 
          userName={firstName}
          count={count}
        />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
