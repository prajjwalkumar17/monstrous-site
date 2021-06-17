/** @format */

import React from "react";
import "./searchBox.style.css";

export const SearchBox = ({ placeholder, handelChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handelChange}
  />
);
