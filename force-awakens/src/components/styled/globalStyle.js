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

  ol, ul {
    list-style: none;
  }

  p, label {
    line-height: 1.6rem;
    letter-spacing: 0.05em;
  }
`;
