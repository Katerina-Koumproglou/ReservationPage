import { createGlobalStyle } from "styled-components";
import coffeeCursor from "../assets/cursors/coffee-to-go.png";
import coffeePointer from "../assets/cursors/coffee-beans.png";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: url(${coffeeCursor}) 16 16, auto;
}

* {
  scrollbar-width: none;
}

*::-webkit-scrollbar{
  display: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


button, a {
    cursor: url(${coffeePointer}) 16 16, pointer;
}`;
