import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import logo from "../../assets/Asset 37-8.png";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "relative"
  },
  logo: {
    width: "15em",
    verticalAlign: "bottom"
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  socialContainer: {
    position: "absolute",
    backgroundColor: theme.palette.primary.main
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        {/* <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              HOME
            </Grid>
          </Grid>
        </Grid> */}
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              TENTANG REDU
            </Grid>
            <Grid item className={classes.link} component={Link} to="/aboutus">
              Tentang Kami
            </Grid>
            <Grid item className={classes.link} component={Link} to="/carrer">
              Karir
            </Grid>
            <Grid item className={classes.link} component={Link} to="/help">
              Bantuan
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/ourcontacts"
            >
              Kontak Kami
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              LAINNYA
            </Grid>
            <Grid item className={classes.link} component={Link} to="/aboutus">
              Apa itu REDU
            </Grid>
            <Grid item className={classes.link}>
              Help Center
            </Grid>
            <Grid item className={classes.link}>
              Kebijakan Privasi
            </Grid>
            <Grid item className={classes.link}>
              Syarat dan Ketentuan
            </Grid>
            <Grid item className={classes.link}>
              Menjadi Content Writer
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              CONNECT
            </Grid>
            <Grid item className={classes.link}>
              Cerita Mereka
            </Grid>
            <Grid item className={classes.link}>
              Blog
            </Grid>
            <Grid item className={classes.link}>
              Galeri Media
            </Grid>
            <Grid item className={classes.link}>
              Brand Partnership
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Temukan kami di:
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img alt="logo redu" src={logo} className={classes.logo} />

      <Grid container justify="flex-end" className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          spacing={2}
          href="http://www.facebook.com"
          target="_blank"
        >
          <img alt="facebook icon" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          spacing={2}
          target="_blank"
        >
          <img alt="twitter icon" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          target="_blank"
          spacing={2}
        >
          <img alt="instagram icon" src={instagram} />
        </Grid>
      </Grid>
    </footer>
  );
}
