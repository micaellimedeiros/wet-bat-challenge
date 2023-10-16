import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import GlobalStyle from "./global";

const theme = extendTheme({
  styles: {
    global: { body: { backgroundColor: "#edf0f9" } },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
    <GlobalStyle />
  </ChakraProvider>,
  document.getElementById("root")
);
