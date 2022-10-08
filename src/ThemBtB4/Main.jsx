import React, { Component } from "react";
import Cart from "./Cart";
import data from "./data.json";
import ModalDetail from "./ModalDetail";
import ProductList from "./ProductList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      isOpenCart: false,
      isOpenDetail: false,
      carts: [],
    };
  }
  //============== Arrow function helper ====================
  handleSelect = (product) => this.setState({ selectedProduct: product });

  // mở Modal thông tin sản phẩm
  handleToggeleDetail = () => {
    this.setState((state) => ({
      isOpenDetail: !state.isOpenDetail,
    }));
  };

  // mở Modal thông giỏ hàng
  handleToggleCart = () => {
    this.setState((state) => ({
      isOpenCart: !state.isOpenCart,
    }));
  };

  // thêm sản phẩm vào giỏ
  handleAddToCart = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id);
    const newCart = [...this.state.carts];
    if (index === -1) {
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }));
    } else {
      newCart[index].quantity += 1;
      this.setState({ cart: newCart });
    }
  };

  // thay đổi slg sản phẩm trong giỏ
  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex((item) => item.id === productId);
    const newCart = [...this.state.carts];
    if (newCart[index].quantity === 1 && quantity === -1) {
      newCart.splice(index, 1);
      this.setState({ carts: newCart });
    } else {
      newCart[index].quantity += quantity;
      this.setState({ carts: newCart });
    }
  };

  //====================Render display==================================
  render() {
    const { isOpenCart, isOpenDetail, carts } = this.state;
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            {/* Navbar */}
            <div className="col-3">
              {" "}
              <button
                className="btn btn-success mt-5"
                onClick={this.handleToggleCart}
              >
                Your Cart <i className="fa-solid fa-cart-shopping py-3"></i>
              </button>
              <div
                className="mt-5 align-self-center"
                style={{ height: "100%" }}
              >
                <div>
                  <nav className="navbar navbar-light bg-light btn btn-light">
                    <div className="container-fluid">Shop</div>
                  </nav>
                </div>
                <div className="my-3">
                  <nav className="navbar navbar-light bg-light btn btn-light">
                    <div className="container-fluid">Home</div>
                  </nav>
                </div>
              </div>
            </div>

            {/* ProductList */}
            <div className="col-9">
              <div className="container">
                <h1 className="text-center" style={{ fontSize: "30px" }}>
                  Shoes Shop
                </h1>
                <ProductList
                  products={data}
                  onSelect={this.handleSelect}
                  onAddToCart={this.handleAddToCart}
                  onViewDetail={this.handleToggeleDetail}
                />
              </div>
            </div>

            {/* ModalDetail*/}
            <ModalDetail
              isOpenDetail={isOpenDetail}
              products={this.state.selectedProduct}
              onCloseDetail={this.handleToggeleDetail}
            />

            {/* Carrt */}
            <Cart
              isOpenCart={isOpenCart}
              carts={carts}
              onCloseCart={this.handleToggleCart}
              onChangeQuantity={this.handleChangeQuantity}
            />
          </div>
        </div>
      </div>
    );
  }
}
