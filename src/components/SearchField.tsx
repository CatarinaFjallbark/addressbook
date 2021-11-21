import React, { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import "./SearchField.css";

type Props = {
    value: string;
    setValue: (val: string) => void
};

export default function SearchField({setValue, value}: Props): ReactElement {
  return (
    <div className="SearchField">
      <TextField className="SearchInput" label="Search" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
