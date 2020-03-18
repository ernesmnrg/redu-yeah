import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import img1 from "../assets/travel.png";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import howImage from "../assets/question.png";
import "../components/ui/Theme";
import googlePlay from "../assets/gooleplay.png";
import repeatingBackground from "../assets/repeatingBackground.svg";

const useStyles = makeStyles(theme => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40
  },
  buttonContainer: {
    marginTop: "1em"
  },
  continueButtonHero: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 50,
    width: 185
  },
  continueButton: {
    ...theme.typography.continueButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "1rem"
  },
  mainContainer: {
    marginTop: "1em"
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.primary.main
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginRight: "2em"
  },
  howToContainer: {
    marginTop: "10em"
  },
  downloadBackgroud: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "%"
  },
  downloadCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*Hero Block */}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item>
            <Typography variant="h2" align="center">
              Media Berbagi Pengalaman <br />{" "}
              <span className={classes.specialText}>Wisata Edukasi</span>
            </Typography>
            {/* <Typography>
              Kami adalah sebuah tempat di mana untuk teman-teman yang ingin
              <br />
              mengekspresikan wisatanya, karena pengalaman wisata yang bagus
              <br />
              perlu untuk diceritakan
            </Typography> */}
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Explore
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.continueButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Baca Selanjutnya</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img alt="travel yuk" src={img1} height={"90%"} width={"95%"} />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Hero Block */}

      <Grid item>
        {" "}
        {/*How to use Redu */}
        <Grid container direction="row" className={classes.howToContainer}>
          <Grid item style={{ marginLeft: "5em" }}>
            <img src={howImage} alt="how" className={classes.icon} />
          </Grid>
          <Grid>
            <Typography variant="h4">Bagaimana menggunakan REDU</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Panduan singkat menggunakan aplikasi Redu
            </Typography>
            <Typography variant="subtitle1">
              1. Unduh Aplikasi REDU di Google Play Store
            </Typography>
            <Typography variant="subtitle1">
              2. Ceritakan dan bagikan pengalaman kamu selama melakukan wisata
              edukasi
            </Typography>
            <Typography variant="subtitle1">
              3. Cari referensi wisata sesuka kamu
            </Typography>
            <Typography variant="subtitle1">
              4. Bergabunglah bersama komunitas yang kamu inginkan
            </Typography>
            <Button variant="outlined" className={classes.continueButton}>
              <span style={{ marginRight: 10 }}>Pelajari Lebih Lanjut</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/*Install redu from googleplay */}
      <Grid item>
        {" "}
        <Grid
          container
          direction="row"
          justify="flex-end"
          className={classes.howToContainer}
        >
          <Grid>
            <Typography variant="h4">Download Aplikasi REDU</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Access. Increase Engagement. Share your experience.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience with our mobile platform.
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: "5em" }}>
            <img
              src={googlePlay}
              alt="download redu"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Card  */}
      {/* <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.downloadCard}>
            <CardContent>
              <Grid
                container
                style={{ textAlign: "center" }}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Download
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Integrate your web experience with our mobile platform.
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={googlePlay} alt="download" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.downloadBackgroud} />
        </Grid>
      </Grid> */}
    </Grid>
  );
}
