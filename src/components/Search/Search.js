import React, { useState } from "react";

import "./Search.css";

function Search() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;