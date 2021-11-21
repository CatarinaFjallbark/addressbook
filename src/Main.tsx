/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ReactElement, Fragment } from "react";
import "./Main.css";
import ContactCard from "./components/ContactCard";
import SearchField from "./components/SearchField";
import { Divider, List } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, Person } from "./store/types";


function App(): ReactElement {
  type Results = Record<string, any>[];
  type Response = {
    info: Record<string, any>;
    results: Results;
  };

  const [data, setData] = useState<Results | undefined>(undefined);
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const state = useSelector((state: Person[]) => state)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const json = (await response.json()) as Response;
      dispatch({ type: actionTypes.loadData, data: json.results })
      console.log("data", json.results);
    }
    //To avoid loading a new set of data when navigating back with React Router
    if (state.length === 0) {
      fetchData();
    }
  }, []);
  return (
    <div className="App">
      <SearchField value={search} setValue={setSearch} />
      <nav>
        <List>
          {state &&
            state
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
                      id: login.uuid,
                    }}
                  />
                  {i !== state.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </Fragment>
              ))}
        </List>
      </nav>
    </div>
  );
}

export default App;
