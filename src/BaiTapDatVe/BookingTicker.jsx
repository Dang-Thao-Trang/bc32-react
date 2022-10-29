import React, { Component } from "react";
import Ghe from "./Ghe";
import data from "./danhSachGhe.json";

class BookTicket extends Component {
  render() {
    return data.map((hangGhe, index) => {
      return (
        <div className="d-flex align-items-center text-center" key={index}>
          <strong className="d-inline-block" style={{ width: "35px" }}>
            {hangGhe.hang}
          </strong>
          <Ghe hangGhe={hangGhe} />
        </div>
      );
    });
  }
}

export default BookTicket;
