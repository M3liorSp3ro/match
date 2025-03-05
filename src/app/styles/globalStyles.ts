import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  /* Сброс базовых стилей */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea {
    outline: none;
    font-family: inherit;
    background: none;
    border: none;
  }

  button:focus:not(:focus-visible),
  input:focus:not(:focus-visible),
  textarea:focus:not(:focus-visible) {
    outline: none;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
    color: #FFFFFF;
    background-color: #06080C;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding: 42px;
  }
`;

export default GlobalStyles;
