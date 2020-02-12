import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    
    return (
      <div className="modal">
        <button className="modal-close" onClick={this.props.closeModal}>close</button>
        <h2 className="modal-heading">SORRY EMEKA</h2>
        <p className="modal-text">You are not eligible for a pension just yet</p>
      </div>
    );
  }
}
