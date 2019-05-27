import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import SearchBar from './SearchBar'
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },

  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

function MeteoritesTable() {
  const classes = useStyles();
  const[data, setData] = useState([]);
  const[query, setQuery] = useState('');
  const [url, setUrl] = useState(
    "https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=100"
  );
  const[isLoading, setIsLoading] = useState(false);
  const[isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
         const result = await axios(url);
      setData(result.data);
      console.log(result.data[0].year.slice(0,4))
      } catch(error){
        setIsError(true)
      }
      setIsLoading(false)
    }; 
    fetchData();
  }, [url]);


  return (
    <div className={classes.root}>
      <SearchBar
        value={query}
        search={e => setQuery(e.target.value)}
        onClick={() =>
          setUrl(`https://data.nasa.gov/resource/gh4g-9sfh.json?$q=${query}`)
        }
      />
      {isError && <h1 style={{ color: 'red', marginTop: 50}}>Something went wrong...</h1>}
      {isLoading ? (
        <CircularProgress style={{ marginTop: 50}} />
      ) : (
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name Type</TableCell>
                <TableCell align="right">Rec Class</TableCell>
                <TableCell align="right">Mass</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Latitude</TableCell>
                <TableCell align="right">Longitude</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.nametype}</TableCell>
                  <TableCell align="right">{row.recclass}</TableCell>
                  <TableCell align="right">{row.mass}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">{row.reclat}</TableCell>
                  <TableCell align="right">{row.reclong}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            onChangePage={f => f}
            count={10}
            rowsPerPage={10}
            page={0}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
          />
        </Paper>
      )}
    </div>
  );
}

export default MeteoritesTable;
