import React, { ReactElement, Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./ContactCard.css";

type Props = {
  info: {
    cell: string;
    email: string;
    name: string;
    img: string;
  };
};
export default function ContactCard({ info }: Props): ReactElement {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="profilepic" src={info.img} />
      </ListItemAvatar>
      <ListItemText
        primary={info.name}
        secondary={
          <Fragment>
            <a href={`mailto:${info.email}`} className="ContactEmail">
              {info.email}
            </a>
            <span>{info.cell}</span>
          </Fragment>
        }
      />
    </ListItem>
  );
}
