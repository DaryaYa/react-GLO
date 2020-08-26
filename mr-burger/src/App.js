import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: @f0f0f0;
    color: black;
    font-family: Roboto, sans-serif;
    font-size: 20px;
  }

  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
  }

`

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      Hello React
    </div>
    <h1>Hello World</h1>
    </>
  );
}

export default App;
