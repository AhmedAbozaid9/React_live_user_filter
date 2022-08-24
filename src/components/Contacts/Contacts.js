import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import "./Contacts.css";
import Contact from "../Contact/Contact";
import randomUserGenerator from "../Apis/randomUserGenerator";
import filterByTerm from "../../utils/filterByTerm";

function Contacts({ numberOfContacts, value }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    randomUserGenerator
      .get("", { params: { results: numberOfContacts } })
      .then((res) => setData(res.data.results));
  }, [numberOfContacts]);
  return (
    <div className="container">
      <div className="contacts">
        {data[0] ? (
          data
            .filter((contact) => filterByTerm(contact, value))
            .map((contact) => (
              <Contact key={contact.login.uuid} contact={contact} />
            ))
        ) : (
          <div className="spinner">
            <ReactLoading
              color={"#554994"}
              type={"spin"}
              height={"80px"}
              width={"80px"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts;
