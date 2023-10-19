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

  svg {
    cursor: pointer;
    color: white;

    width: 1.5rem;
    height: 1.5rem;

  }
  
  .chakra-textarea {
    resize: none;
    border-radius: 1rem;
  }
  
  .chakra-input {
    border-radius: 1rem;
  }
  
  @media (max-width: 768px) {
    .chakra-card__header  {
      flex-direction: column;
      gap: 0.5rem;
    }

    .chakra-button {
      width: auto;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
