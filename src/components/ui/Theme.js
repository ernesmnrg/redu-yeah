import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#015249";
const arcYellow = "#9E8009";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${arcGreen}`
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
  }
});

export default theme;
