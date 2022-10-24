import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#6cb86a",
      light: "#8bf688",
      dark: "#284938",
      contrastText: "#8cffc6",
    },
    secondary: {
      main: "#D95204",
      light: "#F28F16",
      dark: "#592202",
      contrastText: "#F2C335",
    },
    // error: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    // warning: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    // info: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    // success: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
  },
  typography: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: 16,
  },
});

export default theme;
