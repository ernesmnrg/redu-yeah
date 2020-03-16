import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%"
  },
  logo: {
    width: "25em"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container></Grid>
      <img alt="logo redu" src={logo} className={classes.logo} />
    </footer>
  );
}
