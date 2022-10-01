import React from "react";

const ProductItem = ({ product, onClick }) => {
  return (
    <div>
      <div className="card" style={{ width: "100%", height: "500px" }}>
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <div className="card-text">{product.price}$</div>
          <button
            className="btn btn-dark my-3"
            onClick={() => onClick(product)}
          >
            <span>add to cart</span>
            <i className="fa-solid fa-cart-shopping px-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
