import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../components/ui/Theme";
import Routes from "../routes/Routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
