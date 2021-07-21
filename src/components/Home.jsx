import { MAP_CREATE } from "@blueprintjs/icons/lib/esm/generated/iconNames";
import React, { Component } from "react";
import Restaurant from "./restaurant";

class Home extends Component {
    render() {
        const { restaurants, onPress } = this.props;
        // return (
        //   <div>
        //     {restaurants.map((res) => (
        //       <Restaurant
        //         name={res.id}
        //         pic={res.link}
        //         onPress={onPress}
        //       ></Restaurant>
        //     ))}
        //   </div>
        // );
        const rows = [...Array(Math.ceil(restaurants.length / 3))];
        // chunk the products into the array of rows
        const productRows = rows.map((row, idx) =>
            restaurants.slice(idx * 3, idx * 3 + 3)
        );
        // map the rows as div.row
        const content = productRows.map((row, idx) => (
            <div className="row" key={idx}>
                {row.map((res) => (
                    <div className="col-md-3">
                        <Restaurant
                            name={res.id}
                            pic={res.link}
                            onPress={onPress}
                        ></Restaurant>
                    </div>
                ))}
            </div>
        ));
        return <div classname="table">{content}</div>;
    }
}

export default Home;
