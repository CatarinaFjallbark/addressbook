import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Detailed.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Person } from "../store/types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ContactCard(): ReactElement {
  const params = useParams();
  const state = useSelector((state: Person[]) =>
    state.find((person) => person.login.uuid === params.id)
  );
  return (
    <div>
      {state ? (
        <Card sx={{ p: 5, height: "100vh" }}>
          <CardMedia
            sx={{ p: 2 }}
            className="DetailedMedia"
            component="img"
            image={state?.picture.large}
            alt="profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${state?.name.first} ${state?.name.last}`}
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Personal information</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {"Age"}
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell align="right">{state.dob.age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {"Location"}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                      {state.location.street.name}
                    </TableCell>
                    <TableCell align="right">
                      {state.location.street.number}
                    </TableCell>
                    <TableCell align="right">{state.location.city}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions sx={{ p: 2 }}>
            <a href={`mailto:${state?.email}`} className="DetailedContact">
              EMAIL{" "}
            </a>
            <a href={`tel:${state?.cell}`} className="DetailedContact">
              PHONE{" "}
            </a>
          </CardActions>
        </Card>
      ) : (
        <div>No such id</div>
      )}
    </div>
  );
}
