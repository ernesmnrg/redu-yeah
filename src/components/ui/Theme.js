import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#015249";
const arcYellow = "#9E8009";
const arcOrange = "#FFBA60";
const arcGray = "#868686";

const theme = createMuiTheme({
  palette: {
    common: {
      orange: arcOrange,
      gray: arcGray
    },
    primary: {
      main: arcGreen
    },
    secondary: {
      main: `${arcYellow}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem"
    },
    login: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  },
  estimate: {
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: "white"
  },
  h2: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: arcGreen,
    lineHeight: 1.5
  },
  h3: {
    fontFamily: "Pacifico",
    fontSize: "2.5rem",
    color: arcGreen
  },
  h4: {
    fontFamily: "Raleway",
    fontSize: "1.75rem",
    color: arcGreen,
    fontWeight: 700
  },
  subtitle1: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: arcGray
  },
  continueButton: {
    borderColor: arcGreen,
    color: arcGreen,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold"
  }
});

export default theme;
