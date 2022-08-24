import React, { useState } from "react";

import Contacts from "./Contacts/Contacts";
import Header from "./Header/Header";

function App() {
  const [value, setValue] = useState("");
  const searchValue = (value) => {
    setValue(value);
  };
  return (
    <>
      <Header searchValue={searchValue} />
      <Contacts
        numberOfContacts={50}
        value={value}
      />
    </>
  );
}

export default App;
