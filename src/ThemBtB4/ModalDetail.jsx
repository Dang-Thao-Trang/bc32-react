import React from "react";

const ModalDetail = ({ products, isOpenDetail, onCloseDetail }) => {
  if (!isOpenDetail) return null;
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade show d-block "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content bg-dark container py-2 ">
            <div className="modal-header">
              <h3 className="modal-title  text-white" id="exampleModalLabel">
                PRODUCT IMPORMATION
              </h3>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseDetail}
              />
            </div>
            <div className="modal-body row">
              <div className="col-5">
                <img
                  src={products.image}
                  alt={products.name}
                  style={{ width: "200px", height: "300px" }}
                  className=""
                />
                <h2 className="title text-warning">{products.name}</h2>
              </div>
              <div className="col-7">
                <table className="table text-white">
                  <tbody>
                    <tr>
                      <td>PRICE : </td>
                      <td>{products.price} $</td>
                    </tr>
                    <tr>
                      <td>QUANLITY :</td>
                      <td> {products.quantity} shoes</td>
                    </tr>
                    <tr>
                      <td>Description :</td>
                      <td>{products.description}</td>
                    </tr>
                    <tr>
                      <td>SHORT DESCRIPTION:</td>
                      <td>{products.shortDescription}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={onCloseDetail}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default ModalDetail;
