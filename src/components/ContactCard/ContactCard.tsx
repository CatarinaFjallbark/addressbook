import React, { ReactElement, Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./ContactCard.css";
import { Link } from "react-router-dom";

type Props = {
  info: {
    cell: string;
    email: string;
    name: string;
    img: string;
    id: string;
  };
};
export default function ContactCard({ info }: Props): ReactElement {
  return (
    <Link className="ContactLink" to={`/addressbook/${info.id}`}>
      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            backgroundColor: "#ECECEC",
            cursor: "pointer",
          },
        }}
      >
        <ListItemAvatar>
          <Avatar alt="profilepic" src={info.img} />
        </ListItemAvatar>
        <ListItemText
          primary={info.name}
          secondary={
            <Fragment>
              <span className="ContactEmail">{info.email}</span>
              <span>{info.cell}</span>
            </Fragment>
          }
        />
      </ListItem>
    </Link>
  );
}
