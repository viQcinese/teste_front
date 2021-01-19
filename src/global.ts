import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {

  }

  body {
    margin: 0;
    min-height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
