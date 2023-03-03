import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      light: "#d9d9d9",
      main: "#303438",
      dark: "#121212",
      contrastText: "#d9d9d9",
    },
  },
});

export default theme;