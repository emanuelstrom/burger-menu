import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { GlobalStyles, theme } from "../themeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
