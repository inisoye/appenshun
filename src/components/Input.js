import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div className="name-input-container">
        <input
          className="name-input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
    );
  }
}
