import React, { useState } from "react";

import "./Search.css";

function Search({searchValue}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchValue(value)
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
