import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import "./Sort.css";

type Props = {
  up: boolean;
  toggle: () => void;
};

export default function SearchField({ up, toggle }: Props): ReactElement {
  return (
    <div className="SortContainer" onClick={toggle}>
      <Typography variant="h6" component="div">
        Name
      </Typography>
      {up ? <ArrowDropUp /> : <ArrowDropDown />}
    </div>
  );
}
