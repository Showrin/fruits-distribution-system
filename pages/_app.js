import "@/styles/globals.css";
import GeneralLayout from "@/layouts/General";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
    </ThemeProvider>
  );
}
