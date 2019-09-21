import React, { Component } from "react";

import "./styles.scss";

import InputSearch from "./../SearchInput";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="search_space">
          <InputSearch />
        </div>
      </div>
    );
  }
}
