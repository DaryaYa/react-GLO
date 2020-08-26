import React from 'react';
import { createGlobalStyle } from "styled-components";
import { NavBar } from './Components/NavBar';

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

  img {
    max-width: 100%;
    height: auto;
  }

  button, input {
    font-family: inherit;
  }

`

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
    <NavBar />
    </div>
    </>
  );
}

export default App;
