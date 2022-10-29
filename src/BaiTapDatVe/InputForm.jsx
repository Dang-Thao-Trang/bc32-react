import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class InputForm extends Component {
  render() {
    const { name, quantity } = this.props.valueInput;
    let handleClick = (evt) => {
      evt.preventDefault();
      if (name === "" || quantity === 0) {
        alert("Vui lòng nhập tên của bạn và số lượng vé cần mua");
      } else {
        this.props.handleClick();
      }
    };

    return (
      <div className="mb-2">
        <div className="inputForm ">
          <h2 className="text-required">
            Fill The Required Details Below And Select Your Seats
          </h2>
          {/* name */}
          <div className="information d-flex mb-3">
            <div className="information-left d-flex mb-3">
              <label className="text-white fs-6 fw-bold align-self-center">
                Name
                <span>*</span>
              </label>
              <input
                id="UserName"
                className="form-control text-white"
                placeholder="Tên của bạn?"
                type="text"
                name="name"
                value={name}
                onChange={this.props.handleChange}
                required
              />
            </div>
            {/* number of seat */}
            <div className="information-right">
              <label className="text-white fs-6 fw-bold">
                Number of Seat
                <span>*</span>
              </label>
              <input
                id="NumOfSeat"
                className="form-control"
                type="number"
                name="quantity"
                value={quantity < 0 ? 0 : quantity}
                onChange={this.props.handleChange}
                required
                min={1}
              />
            </div>
          </div>
          <Button
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Start Selecting
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    valueInput: state.datveReducer.valueInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch({
        type: "INPUT",
        e,
      });
    },
    handleClick: () => {
      dispatch({
        type: "LOG_IN",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
