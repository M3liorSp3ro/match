import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Сброс базовых стилей */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Убираем стандартное оформление списка */
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Убираем стандартные стили у ссылок */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Убираем стандартный outline у фокусных элементов */
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

  /* Глобальные стили для body */
  body {
    font-family: sans-serif;
    line-height: 1.5;
    color: #FFFFFF;
    background-color: #06080C;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Сделать изображения адаптивными */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Убираем стандартный стиль кнопок */
  button {
    cursor: pointer;
  }

  /* Убираем стрелки у input[type="number"] */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Убираем стандартный appearance у select */
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: 42px;
  }
`;

export default GlobalStyles;