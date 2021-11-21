import React, { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import "./SearchField.css";

export default function SearchField(): ReactElement {
  return (
    <div className="SearchField">
      <TextField className="SearchInput" label="Search" variant="outlined" />
    </div>
  );
}
