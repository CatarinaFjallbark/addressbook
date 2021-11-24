import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import Detailed from "./components/Detailed/Detailed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./store";
import { createStore } from "redux";

//Creates a Redux store with empty array as initial state
const store = createStore(rootReducer, []);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<Detailed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
