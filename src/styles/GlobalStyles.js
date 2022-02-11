import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}

p{
  font-size: 1.6rem;
}

li{
  list-style:none;
}

button{
  background-color: transparent;
  border: 0;
  outline: 0;
}
body{
  background: #fefefe;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
  overscroll-behavior: none;
  width: 100%;
}

#app {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow-x: hidden;
  min-height: 100vh;
  padding-bottom: 10px;
}

`
