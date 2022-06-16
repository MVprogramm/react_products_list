import React from "react";
import CartTitle from "./CartTitle.jsx";
import ProductsList from "./ProductsList.jsx";

import "./column.scss";

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '2',
        name: 'iPhone 11',
        price: 999,
      },
    ],
  };
     
  render() {
    const { userData } = this.props;
    const count = this.state.cartItems.length;
    
    return (
      <div className="column">
        <CartTitle 
          userName={userData.firstName}
          count={count}
        />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
