import React, { Component } from "react";
import { Link } from "react-router-dom";

class Restaurant extends Component {
  render() {
    return (
      <div className="resLogo">
        <Link to="/search" onClick={() => this.props.onPress(this.props.name)}>
          {/* <button className="btn btn-info btn-sm m-2">search</button> */}
          <img src={this.props.pic} alt="Logo" width="15%" height="50%" />
          <div>{this.props.name}</div>
        </Link>
      </div>
    );
  }
}

export default Restaurant;
