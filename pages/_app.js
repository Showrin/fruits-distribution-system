import "@/styles/globals.css";
import GeneralLayout from "@/layouts/General";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import UserContext from "@/contexts/UserContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <GeneralLayout>
          <Component {...pageProps} />
        </GeneralLayout>
      </UserContext.Provider>
    </ThemeProvider>
  );
}
