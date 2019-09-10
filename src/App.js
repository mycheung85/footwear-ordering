import React, { Component } from "react";
import ProductList from "./components/ProductList";
import OrderStatus from "./components/OrderStatus";
import getProductData from "./data/api";
import "../src/styles/productList.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFiltered: false
    };
  }

  componentDidMount() {
    return getProductData().then(productData => {
      this.setState({
        data: productData
      });
    });
  }

  handleClick(e) {
    const product2 = this.state.data.filter(product => {
      return product.status.toLowerCase() === e.target.value.toLowerCase();
    });

    this.setState({
      data: product2,
      isFiltered: true
    });
  }

  render() {
    return (
      <div>
        <OrderStatus handleClick={this.handleClick.bind(this)} />
        {this.state.data.length > 0 && (
          <ProductList productData={this.state.data} />
        )}
      </div>
    );
  }
}

export default App;
