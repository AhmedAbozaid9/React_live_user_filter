import React, { useEffect, useState } from "react";

import "./Contacts.css";
import Contact from "../Contact/Contact";
import randomUserGenerator from "../Apis/randomUserGenerator";

function Contacts({numberOfContacts}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    randomUserGenerator
      .get("", { params: { results: numberOfContacts } })
      .then((res) => setData(res.data.results));
  }, [numberOfContacts]);


  return (
    <div className="contacts">
      {data? data.map((contact => <Contact contact={contact}/>)):"Loading"}
    </div>
  );
}

export default Contacts;
