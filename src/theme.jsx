import { createTheme } from "@mui/material";

const theme = createTheme({
  Profiler: {
    appBarHeight: "65px",
  },

  palette: {
    primary: {
      main: "#000",
    },
    text: {
      primary: "#ffff",
      secondary: "#0EA5E9",
      // secondary: "linear-gradient(45deg, #06B6D4, #3B82F6 50%, #0EA5E9);",
    },
    background: {
      default: "#000",
      light: "#262626",
      linear: "linear-gradient(45deg, #06B6D4, #3B82F6 50%, #0EA5E9);",
      paper: "#ffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#262626",
          color: "white",
          borderRadius: "25px",
          padding: "0.5rem 1rem",
          "+.MuiButton-root": {
            marginLeft: "0.5rem",
          },
        },
      },
    },
  },

  globalStyles: {
    a: {
      textDecoration: "none",
    },
  },
});
export default theme;
