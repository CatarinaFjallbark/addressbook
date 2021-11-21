import React, { useEffect, useState, ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
