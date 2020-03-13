import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#015249";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: `${arcGreen}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    }
  }
});

export default theme;
