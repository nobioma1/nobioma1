import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@styled/globalStyle";
import theme from "../../theme";

const Main = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Main;
