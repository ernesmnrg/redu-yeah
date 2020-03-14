import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
  },
  button: {
    ...theme.typography.login,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {});

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img alt="redu logo" className={classes.logo} src={logo} />
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab
              className={classes.tab}
              component={Link}
              to="/"
              label="Beranda"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/content"
              label="Konten"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/aboutus"
              label="Tentang Kami"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/help"
              label="Bantuan"
            />
          </Tabs>
          <Button
            variant="contained"
            component={Link}
            to="/login"
            color="secondary"
            className={classes.button}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
