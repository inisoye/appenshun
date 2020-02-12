import React, { Component } from "react";

export default class Head extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="head-wrapper blur">
          <h1 className="main-title">APPENSHUN!</h1>
          <p className="subtitle">
            Eyss, fill the form below to find out whether you are eligible for a
            pension.
          </p>
        </div>
      );
    }

    return (
      <div className="head-wrapper">
        <h1 className="main-title">APPENSHUN!</h1>
        <p className="subtitle">
          Eyss, fill the form below to find out whether you are eligible for a
          pension.
        </p>
      </div>
    );
  }
}
