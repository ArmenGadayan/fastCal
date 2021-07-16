import { MAP_CREATE } from "@blueprintjs/icons/lib/esm/generated/iconNames";
import React, { Component } from "react";
import Restaurant from "./restaurant";

class Home extends Component {
  render() {
    return (
      <div>
        <Restaurant />
        <Restaurant />
      </div>
    );
  }
}

export default Home;
