import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import "./Sorry.css";

export default function SearchField(): ReactElement {
  return (
    <div className="SorryContainer">
      <Typography variant="h4" component="div">
        We have a problem
      </Typography>
      <SentimentVeryDissatisfied />
    </div>
  );
}
