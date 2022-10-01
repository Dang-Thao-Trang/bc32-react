import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onClick }) => {
  return (
    <div>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-sm-4 py-3" key={product.id}>
            <ProductItem product={product} onClick={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
