import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Link to="/search">
                <button className="btn btn-info btn-sm m-2">search</button>
            </Link>
        );
    }
}

export default Home;
