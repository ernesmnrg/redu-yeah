import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "2.5em"
  },
  logoContainer: {
    padding: 0
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
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: "Konten", link: "/content" },
    { name: "Artikel", link: "/article" },
    { name: "Stori", link: "/story" },
    { name: "Festival", link: "/festival" },
    { name: "Loka Karya", link: "/lokakarya" },
    { name: "Video", link: "/video" }
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/content" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/aboutus" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/help" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/login" && value !== 4) {
      setValue(4);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/content":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/article":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/story":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/festival":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/lokakarya":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(4);
        }
        break;
      case "/video":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(5);
        }
        break;
      case "/aboutus":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/help":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/login":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => setValue(0)}
          >
            <img alt="redu logo" className={classes.logo} src={logo} />
          </Button>
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
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              className={classes.tab}
              component={Link}
              onMouseOver={event => handleClick(event)}
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
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            classes={{ paper: classes.menu }}
            MenuListProps={{ onMouseLeave: handleClose }}
            elevation={0}
          >
            {/* <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/content"
              classes={{ root: classes.menuItem }}
            >
              Konten
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/article"
              classes={{ root: classes.menuItem }}
            >
              Artikel
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/story"
              classes={{ root: classes.menuItem }}
            >
              Stori
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/festival"
              classes={{ root: classes.menuItem }}
            >
              Festival
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/lokakarya"
              classes={{ root: classes.menuItem }}
            >
              Loka Karya
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/video"
              classes={{ root: classes.menuItem }}
            >
              Video
            </MenuItem> */}
            {menuOptions.map((option, index) => (
              <MenuItem
                key={index}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
                onClick={event => {
                  handleMenuItemClick(event, index);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
