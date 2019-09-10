import React, { Component } from "react";
import ProductList from "./components/ProductList";
import OrderStatus from "./components/OrderStatus";
import getProductData from "./data/api";
import "../src/styles/productList.css";
import productData from "./data/productData";

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

  handleClickOrderStatus(e) {
    const filteredOnOrderStatus = this.state.data.filter(product => {
      return product.status.toLowerCase() === e.target.value.toLowerCase();
    });

    this.setState({
      data: filteredOnOrderStatus,
      isFiltered: true
    });
  }

  handleClickBackButton(e) {
    this.setState({
      data: productData,
      isFiltered: false
    });
  }

  render() {
    return (
      <div>
        <OrderStatus
          handleClickOrderStatus={this.handleClickOrderStatus.bind(this)}
          handleClickBackButton={this.handleClickBackButton.bind(this)}
        />
        {this.state.data.length > 0 && (
          <ProductList productData={this.state.data} />
        )}
      </div>
    );
  }
}

export default App;
