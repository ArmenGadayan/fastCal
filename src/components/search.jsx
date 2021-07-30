import React, { Component } from "react";
import { useState } from "react";
import JSONDATA from "../data.json";
import { Icon, IconSize } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Search = ({ restaurant, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container3">
      <Link style={{ textDecoration: "none", color: "#FFF" }} to="/">
        Home
      </Link>
      <span>
        <Icon className="m-1" icon="globe" iconSize={20} />
        <input
          className="search"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />{" "}
      </span>

      {JSONDATA.map((value, key) => {
        return value.foodItems
          .filter((val) => {
            if (value.restaurant.includes(restaurant)) {
              if (searchTerm === "") return val;
              //else if (val.ITEM.toLowerCase().includes(searchTerm.toLowerCase()))
              //return val;
              if (val.calories <= searchTerm) return val;
              else if (
                val.foodName.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !/\d/.test(searchTerm) //val.ITEM.some(nums) //includes("1") //fix this
              )
                return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="user " key={key}>
                {" "}
                <p className=" container-fluid">
                  <button
                    className="searchAddbutton btn btn-danger btn-sm m-2"
                    onClick={() => onAdd(val.calories, val.foodName)}
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(0,0,0,0.2)",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 45,
                      height: 45,
                      backgroundColor: "#212529",
                      borderRadius: 20,
                      fill: "white",
                    }}
                  >
                    <Icon className="m-1" icon="add" iconSize={20} />
                  </button>
                  {val.foodName}{" "}
                  <span className="badge bg-dark">{val.calories} </span>
                </p>
              </div>
            );
          });
      })}
    </div>
  );
};

export default Search;
