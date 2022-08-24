import React from "react";

import "./Header.css";
import Search from "../Search/Search";

function Header() {
  return (
    <div className="header">
      <div className="info">
        <h3>Live user filter</h3>
        <p>Search by name and/or position</p>
      </div>
      <Search />
    </div>
  );
}

export default Header;
