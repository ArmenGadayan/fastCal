import React, { Component } from "react";
import { Link } from "react-router-dom";
import MC from "../McDonalds-logo.png";

class Restaurant extends Component {
  render() {
    return (
      <div className="resLogo">
        <Link to="/search">
          {/* <button className="btn btn-info btn-sm m-2">search</button> */}
          <img src={MC} alt="Logo" width="25%" height="25%" />
        </Link>
      </div>
    );
  }
}

export default Restaurant;
