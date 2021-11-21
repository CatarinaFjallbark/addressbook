/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ReactElement, Fragment } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import SearchField from "./components/SearchField";
import { Divider, List } from "@mui/material";

function App(): ReactElement {
  type Results = Record<string, any>[];
  type Response = {
    info: Record<string, any>;
    results: Results;
  };

  const [data, setData] = useState<Results | undefined>(undefined);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const json = (await response.json()) as Response;
      setData(json.results);
      console.log("data", json.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <SearchField value={search} setValue={setSearch} />
      <List>
        {data &&
          data
            .filter(({ name }) => {
              if (search) {
                return (
                  name.first.toLowerCase().startsWith(search.toLowerCase()) ||
                  name.last.toLowerCase().startsWith(search.toLowerCase())
                );
              }
              return true;
            })
            .map(({ login, cell, email, name, picture }, i) => (
              <Fragment key={login.uuid}>
                <ContactCard
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
              </Fragment>
            ))}
      </List>
    </div>
  );
}

export default App;
