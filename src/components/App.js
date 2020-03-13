// import React from "react";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// // import theme from "../components/ui/Theme";
//
// import Button from "@material-ui/core/Button";

// const theme = createMuiTheme({
//   pallete: {
//     primary: {
//       main: `#ff0000`
//     },
//     secondary: {
//       main: `#00ff00`
//     }
//   },
//   typography: {
//     h3: {
//       fontWeight: 300
//     }
//   }
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Header />
//       <h1 color="primary">Hallo</h1>
//       <Button color="secondary">Primary</Button>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from "react";
// import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Header from "../components/ui/Header";
import Button from "@material-ui/core/Button";
import theme from "../components/ui/Theme";

// const red = "#0000ff";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: "#000000"
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: red
//     }
//   }
// });

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Button color="secondary">test</Button>
    </ThemeProvider>
  );
}
