// import React from 'react';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #2e0a0a;
  }
  body {
    // background-color: #f0f0f0;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input {
    font: inherit;
    cursor: pointer;
  }

  ul, li {
    margin, padding: 0;
    list-style-type: none;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`;