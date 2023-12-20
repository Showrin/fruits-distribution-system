import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "#6c3",
    //   contrastText: "#ffffff",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    // text: {
    //   primary: "#333",
    // },
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        slotProps: {
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px 16px",
            },
          },
        },
      },
    },
  },
});
