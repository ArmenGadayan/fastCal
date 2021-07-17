import { MAP_CREATE } from "@blueprintjs/icons/lib/esm/generated/iconNames";
import React, { Component } from "react";
import Restaurant from "./restaurant";

class Home extends Component {
  render() {
    const { restaurants, onPress } = this.props;
    return (
      <div className>
        {restaurants.map((res) => (
          <Restaurant
            name={res.id}
            pic={res.link}
            onPress={onPress}
          ></Restaurant>
        ))}
      </div>
    );
  }
}

export default Home;
