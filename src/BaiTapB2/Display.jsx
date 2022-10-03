import React from "react";

const Display = ({ product }) => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Nguoi mau phai */}
          <div className="col-md-6">
            <div
              style={{ width: "300px", height: "400px" }}
              className="mx-auto position-relative"
            >
              <img
                src="./glassesImage/model.jpg"
                alt="model"
                width="100%"
                height="100%"
              />
              <img
                className="img-glasses"
                src={product.url}
                alt={product.name}
                width="160px"
                height="60px"
              />
              <div className="detail p-2 text-white">
                <h6 className="text-primary mb-1">
                  {product.name} - {product.price}$
                </h6>
                <div className="lh-sm fs-6">{product.desc}</div>
              </div>
            </div>
          </div>
          {/* Nguoi mau trai */}
          <div className="col-md-6">
            <div
              style={{ width: "300px", height: "400px" }}
              className="mx-auto position-relative"
            >
              <img
                src="./glassesImage/model.jpg"
                alt="model"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
