import React, { Component } from "react";

export default class ViewResult extends Component {
  render() {
    if (this.props.show) {
      return (
        <button
          className="view-result blur"
          type="button"
          onClick={this.props.showModal}
        >
          VIEW RESULT
        </button>
      );
    }

    return (
      <button
        className="view-result"
        type="button"
        onClick={this.props.showModal}
      >
        VIEW RESULT
      </button>
    );
  }
}
