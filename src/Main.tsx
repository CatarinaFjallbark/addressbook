/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ReactElement, Fragment } from "react";
import "./Main.css";
import ContactCard from "./components/ContactCard/ContactCard";
import SearchField from "./components/SearchField/SearchField";
import Sort from "./components/Sort/Sort";
import Sorry from "./components/Sorry/Sorry";
import { Divider, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes, Person } from "./store/types";

function App(): ReactElement {
  type Results = Record<string, any>[];
  type Response = {
    info: Record<string, any>;
    results: Results;
  };

  const sort = (state: Person[]): Person[] => {
    return state.sort((a, b) => {
      if (asc) {
        if (a.name.first < b.name.first) return -1;
        if (a.name.first > b.name.first) return 1;
      } else {
        if (a.name.first > b.name.first) return -1;
        if (a.name.first < b.name.first) return 1;
      }
      return 0;
    });
  };

  const [search, setSearch] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [asc, toggleAsc] = useState<boolean>(true);
  const dispatch = useDispatch();
  const state = useSelector((state: Person[]) => sort(state));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const json = (await response.json()) as Response;
        dispatch({ type: actionTypes.loadData, data: json.results });
      } catch (e) {
        setShowError(true);
        console.error(e);
      }
    }
    //To avoid loading a new set of data when navigating back with React Router
    if (state.length === 0) {
      fetchData();
    }
  }, []);
  return (
    <div className="Main">
      <SearchField value={search} setValue={setSearch} />
      <div className="SortContainer">
        <Sort up={!asc} toggle={() => toggleAsc(!asc)} />
      </div>
      <nav>
        <List>
          {state && state.length > 0 ? (
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
              ))
          ) : (
            <>{showError && <Sorry />}</>
          )}
        </List>
      </nav>
    </div>
  );
}

export default App;
