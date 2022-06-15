import React from "react";

import "./index.scss";

import ShoppingCart from "./ShoppingCart.jsx";
import Profile from "./Profile.jsx";
import products from './products.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: this.props.userData.firstName,
      lastName: this.props.userData.lastName,
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'firstName') {
      this.setState({
        firstName: event.target.value,
      });
    } else {
      this.setState({
        lastName: event.target.value,
      });
    }
  }

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="page">
        <h1 className="title">Hello, {firstName} {lastName}</h1>
        <main className="content">
          <ShoppingCart
            productsList={products()}
            userName={firstName}
          />
          <Profile 
            userData={this.state}
            onChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
};

export default App;
