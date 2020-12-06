import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fresca', sans-serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  but

  ol, ul {
    list-style: none;
  }
`;
