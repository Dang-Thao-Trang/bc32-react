import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class BookingInfo extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="confirm txt-center">
          <div className="screen">
            <h2>SCREEN THIS WAY</h2>
          </div>
          <Button
            onClick={() => {
              this.props.handleConfirm();
            }}
            className="d-flex mx-auto"
          >
            Confirm Selection
          </Button>
        </div>

        <div className="displayBooking txt-center mt-5 ">
          <table className="w3ls-table text-center fs-5 w-100">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number of Seat</th>
                <th>Seat</th>
              </tr>
              <tr>
                <td> {this.props.nameUser}</td>
                <td>{this.props.quantitySeat}</td>
                <td>
                  {this.props.danhSachGheShow.reduce((result, item) => {
                    return (result += item.soGhe + ", ");
                  }, "")}
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  Tổng tiền:{" "}
                  {this.props.danhSachGheShow
                    .reduce((result, item) => {
                      return (result += item.gia);
                    }, 0)
                    .toLocaleString()}{" "}
                  vnd
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nameUser: state.datveReducer.nameUser,
    quantitySeat: state.datveReducer.quantitySeat,
    danhSachGheShow: state.datveReducer.danhSachGheShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleConfirm: () => {
      dispatch({
        type: "CONFIRM_SELECTION",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
