import React from "react";
import CartTitle from "./CartTitle.jsx";
import ProductsList from "./ProductsList.jsx";

import "./column.scss";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsList: this.props.productsList,
    };
  }
   
  render() {
    const count = this.props.productsList.length;
    
    return (
      <div className="column">
        <CartTitle 
          userName={this.props.userName}
          count={count}
        />
        <ProductsList cartItems={this.props.productsList} />
      </div>
    );
  }
}

export default ShoppingCart;
