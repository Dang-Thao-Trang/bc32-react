import React from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  const myModal = {
    display: isOpen ? "block" : "none",
  };
  return (
    <div>
      <div
        style={myModal}
        className="modal fade show"
        id="modelId"
        tabIndex={-1}
      >
        <div className="modal-dialog " role="document">
          <div
            className="modal-content bg-dark container"
            style={{ width: "80vh" }}
          >
            <div className="modal-header row">
              <div className="ms-5">
                <img
                  src={product.image}
                  alt={product.name}
                  width="50%"
                  height="250px"
                  className="ms-5"
                />
              </div>
              <h3 className="modal-title text-success col-sm-12 text-center">
                {product.name}
              </h3>
            </div>
            <div className="modal-body">
              <table className="table text-white">
                <tbody>
                  <tr>
                    <td>PRICE</td>
                    <td>{product.price} $</td>
                  </tr>
                  <tr>
                    <td>QUANLITY</td>
                    <td>{product.quantity} shoes</td>
                  </tr>
                  <tr>
                    <td>DESCRIPTION</td>
                    <td>{product.description}</td>
                  </tr>
                  <tr>
                    <td>SHORT DESCRIPTION</td>
                    <td>{product.shortDescription}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
