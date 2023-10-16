import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Segoe UI", Arial, sans-serif;
  }

  .chakra-textarea {
    resize: none;
    border-radius: 1rem;
  }

  .chakra-input {
    border-radius: 1rem;
  }
`;
