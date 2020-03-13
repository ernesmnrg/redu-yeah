import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "2em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar disableGutters>
          <img alt="redu logo" className={classes.logo} src={logo} />
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Konten" />
            <Tab className={classes.tab} label="Tentang Kami" />
            <Tab className={classes.tab} label="Bantuan" />
          </Tabs>
          <Button variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
