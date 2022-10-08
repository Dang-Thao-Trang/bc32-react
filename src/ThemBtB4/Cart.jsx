import React from "react";

const Cart = ({ isOpenCart, carts, onChangeQuantity, onCloseCart }) => {
  if (!isOpenCart) {
    return null;
  }

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center text-danger"
                id="exampleModalLabel"
              >
                YOUR CART
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, index) => (
                    <tr key={cart.id}>
                      <td>{index + 1}</td>
                      <td>{cart.name}</td>
                      <td>
                        <img
                          src={cart.image}
                          alt={cart.name}
                          width="60px"
                          height="40px"
                        />
                      </td>
                      <td>{cart.price}</td>
                      <td>
                        <button
                          className="btn-secondary"
                          onClick={() => onChangeQuantity(cart.id, -1)}
                        >
                          -
                        </button>
                        <span> {cart.quantity} </span>
                        <button
                          className="btn-secondary"
                          onClick={() => onChangeQuantity(cart.id, +1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{cart.quantity * cart.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={onCloseCart}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* over lay */}
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};
export default Cart;
