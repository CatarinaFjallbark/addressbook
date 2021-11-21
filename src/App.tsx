import React, { useEffect, useState, ReactElement } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import SearchField from "./components/SearchField";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

function App(): ReactElement {
  type Results = Record<string, any>[];
  type Response = {
    info: Record<string, any>;
    results: Results;
  };
  type State = Results | undefined;

  const [data, dataSet] = useState<State>(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const json = (await response.json()) as Response;
      dataSet(json.results);
      console.log("data", json.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <SearchField />
      <List>
        {data &&
          data.map(({ login, cell, email, name, picture }, i) => (
            <>
              <ContactCard
                key={login.uuid}
                info={{
                  cell,
                  email,
                  name: `${name.first} ${name.last}`,
                  img: picture.thumbnail,
                }}
              />
              {i !== data.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </>
          ))}
      </List>
    </div>
  );
}

export default App;
