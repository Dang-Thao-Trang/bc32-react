import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart, onSelect, onViewDetail }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-6 col-lg-4 py-2" key={product.id}>
          <ProductItem
            product={product}
            onSelect={onSelect}
            onAddToCart={onAddToCart}
            onViewDetail={onViewDetail}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
