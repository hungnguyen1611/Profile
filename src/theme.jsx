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
      secondary: "#400d64",
      // secondary: "linear-gradient(45deg, #ff82f3, #7b13ff 50%, #400d64);",
    },
    background: {
      default: "#000",
      light: "#262626",
      linear: "linear-gradient(45deg, #ff82f3, #7b13ff 50%, #400d64);",
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
