import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293",
    },
    typography: {
      primary: "rgba(255, 255, 255, 0.5)",
      secondary: "rgba(255, 255, 255, 0.7)",
      // disabled: "rgba(255, 255, 255, 0.5)",
      subtitle: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: "italic",
      },
    },
  },
});
export default theme;
