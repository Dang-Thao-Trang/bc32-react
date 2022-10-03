import React, { Component } from "react";
import "./GlassCSS.css";
import data from "./data.json";
import Display from "./Display";
import GlassList from "./GlassList";

export default class BtB2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glass: data[0],
    };
  }

  handleSelected = (product) => this.setState({ glass: product });

  render() {
    const { glass } = this.state;
    return (
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="background">
          <div className="bg-dark text-white text-center fs-5 py-3 opacity-75">
            TRY GLASSES APP ONLINE
          </div>
          <Display product={glass} />
          <GlassList products={data} onSelect={this.handleSelected} />
        </div>
      </div>
    );
  }
}
