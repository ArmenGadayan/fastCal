import React, { Component } from "react";
import { Link } from "react-router-dom";

class Restaurant extends Component {
    render() {
        return (
            <div className="resLogo">
                <Link
                    to="/search"
                    onClick={() => this.props.onPress(this.props.name)}
                    style={{ textDecoration: "none", color: "#000" }}
                >
                    {/* <button className="btn btn-info btn-sm m-2">search</button> */}
                    <img src={this.props.pic} alt="Logo" />
                    <div>{this.props.name}</div>
                </Link>
            </div>
        );
    }
}

export default Restaurant;
