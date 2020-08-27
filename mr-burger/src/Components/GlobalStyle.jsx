// import React from 'react';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

  ul, li {
    margin, padding: 0;
list-style-type: none;
  }
`;