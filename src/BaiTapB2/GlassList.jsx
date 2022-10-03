import React from "react";
import GlassItem from "./GlassItem";

const GlassList = ({ products, onSelect }) => {
  return (
    <div className="pb-3">
      <div className="row bg-white p-3 w-75 mx-auto my-5">
        {products.map((product) => (
          <GlassItem product={product} key={product.id} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default GlassList;
