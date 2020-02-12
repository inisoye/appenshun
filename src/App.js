import React, { Component } from "react";
import "./App.css";
import Head from "./components/Head";
import Input from "./components/Input";
import StateSelect from "./components/StateSelect";
import AgeSelect from "./components/AgeSelect";
import { ageOptions, stateOptions } from "./components/selectProps";
import Modal from "./components/Modal";
import ViewResult from "./components/ViewResult";

export default class App extends Component {
  //* show is false by default
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="full-wrapper">
        <Head show={this.state.show} />
        <Input />
        <AgeSelect options={ageOptions} />
        <StateSelect options={stateOptions} />
        <ViewResult show={this.state.show} showModal={this.showModal} />

        <Modal show={this.state.show} closeModal={this.closeModal} />
      </div>
    );
  }
}
