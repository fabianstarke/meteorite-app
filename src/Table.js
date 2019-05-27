import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, id, nameType, recClass, fall, year, latitude, longitude) {
  return { name, id, nameType, recClass, fall, year, latitude, longitude };
}

const rows = [
  createData("Aachen", 1, "Valid", "L5", 21, "Fell", 1880, 50.775, 6.083),
  createData("Aarhus", 2, "Valid", "H6", 720, "Fell", 1950, 50.775, 6.083),
  createData("Abee", 6, "Valid", "EH4", 10700, "Fell", 1975, 50.775, 6.083),
  createData("Acapulco", 10, "Valid", "L6", 480, "Fell", 1614, 50.775, 6.083),
  createData("Achiras", 369, "Valid", "H4", 310, "Fell", 1830, 50.775, 6.083),
  createData("Adhi Kot", 398, 'Valid', 'LL3-6', 250, 'Fell', 1919, 50.775, 6.083),
  createData("Agen", 7, 'Valid', 'L5', 27, 'Fell', 1930, 50.775, 6.083),
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name Type</TableCell>
            <TableCell align="right">Rec Class</TableCell>
            <TableCell align="right">Fall</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nameType}</TableCell>
              <TableCell align="right">{row.recClass}</TableCell>
              <TableCell align="right">{row.fall}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={10}
        page={3}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
      />
    </Paper>
  );
}

export default SimpleTable;
