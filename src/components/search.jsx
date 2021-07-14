import React, { Component } from "react";
import { useState } from "react";
import JSONDATA from "../data.json";
import { Icon, IconSize } from "@blueprintjs/core";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container3">
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

      {JSONDATA.filter((val) => {
        if (searchTerm === "") return val;
        //else if (val.ITEM.toLowerCase().includes(searchTerm.toLowerCase()))
        //return val;
        if (parseInt(val.CAL, 10) <= searchTerm) return val;
        else if (
          val.ITEM.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !val.ITEM.includes("1") //fix this
        )
          return val;
      }).map((val, key) => {
        return (
          <div className="user " key={key}>
            {" "}
            <p className=" container-fluid">
              {val.ITEM} <span className="badge bg-dark">{val.CAL} </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
