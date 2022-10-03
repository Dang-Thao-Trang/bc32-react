import React from "react";

const GlassItem = ({ product, onSelect }) => {
  const handleSelected = (product) => onSelect(product);
  return (
    <div className="col-sm-4 col-md-2 btn btn-light ">
      <img
        src={product.url}
        alt={product.name}
        width="100%"
        onClick={() => handleSelected(product)}
      />
    </div>
  );
};

export default GlassItem;
