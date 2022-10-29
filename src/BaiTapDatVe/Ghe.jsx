import React, { Component } from "react";
import "./style.css";

import { connect } from "react-redux";

class Ghe extends Component {
  renderHangGhe = () => {
    const { hangGhe, danhSachGheDangDat } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      if (hangGhe.hang === "") {
        return (
          <div className="m-1" style={{ width: "40px" }} key={index}>
            <strong>{ghe.soGhe}</strong>
          </div>
        );
      } else {
        let gheDaDat = "";
        let disabled = false;
        // ghế đã đặt
        if (ghe.daDat) {
          gheDaDat = "gheDaDat";
          disabled = true;
        }

        // người dùng chọn ghế
        let gheDangChon = "";
        let indexgheDangChon = danhSachGheDangDat.findIndex(
          (item) => item.soGhe === ghe.soGhe
        );

        if (indexgheDangChon !== -1) {
          gheDangChon = "gheDangChon";
        }

        return (
          <button
            key={index}
            onClick={() => {
              this.props.handleCheck(ghe);
            }}
            disabled={disabled}
            name={ghe.soGhe}
            className="btnGhe m-2"
            type="button"
          >
            <input className="d-inline-block" type="checkBox" />
            <span className={`ghe ${gheDaDat} ${gheDangChon}`}>
              {ghe.soGhe}
            </span>
          </button>
        );
      }
    });
  };

  render() {
    return (
      <div className="d-flex align-items-center">{this.renderHangGhe()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.datveReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheck: (ghe) => {
      dispatch({
        type: "BOOK_SEAT",
        ghe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ghe);
