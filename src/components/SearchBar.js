import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

function SearchBar(props){
    const classes = useStyles;
    return (
      <div>
        <InputBase
          className={classes.input}
          placeholder="Search Meteorite"
          onChange={props.search}
          type="text"
          value={props.value}
        />
        <IconButton onClick={props.onClick}className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </div>
    );
}

export default SearchBar;