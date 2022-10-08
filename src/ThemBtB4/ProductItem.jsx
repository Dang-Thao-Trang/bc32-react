import React from "react";

const ProductItem = ({ product, onAddToCart, onSelect, onViewDetail }) => {
  const handleToggle = (product) => {
    onSelect(product);
    onViewDetail();
  };

  return (
    <div>
      <div className="card" style={{ width: "100%", height: "500px" }}>
        <img src={product.image} alt={product.name} className="card-image" />

        <div className="card-body">
          {/* product */}
          <h6 className="card-title">{product.name}</h6>
          <div className="card-text">{product.price}$</div>
          {/* button view detail */}
          <button
            className="btn btn-secondary col-sm-5 col-lg-4 mx-2"
            style={{ fontSize: "14px" }}
            onClick={() => handleToggle(product)}
          >
            view detail
          </button>
          {/* button add to cart */}
          <button
            className="btn btn-dark my-3 col-sm-6 col-lg-6"
            style={{ fontSize: "14px" }}
            onClick={() => onAddToCart(product)}
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
