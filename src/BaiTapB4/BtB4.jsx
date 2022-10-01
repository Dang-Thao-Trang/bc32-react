import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";

export default class BtB4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      product: {},
    };
  }

  // function đóng mở Modal
  handleOpen = (product) => {
    this.setState({ isOpen: true, product });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    // hiển thị
    const { isOpen, product } = this.state;
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-3 align-self-center">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td style={{ width: "100%" }}>Home</td>
                  </tr>
                  <tr>
                    <td style={{ width: "100%" }}>Shop</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ProductList */}
            <div className="col-9">
              <div className="container">
                <div className="text-center" style={{ fontSize: "30px" }}>
                  Shoes Shop
                </div>
                <ProductList products={data} onClick={this.handleOpen} />
              </div>
            </div>
            {/* ProductModal */}
            <ProductModal
              isOpen={isOpen}
              onClose={this.handleClose}
              product={product}
            />
          </div>
        </div>
      </div>
    );
  }
}
