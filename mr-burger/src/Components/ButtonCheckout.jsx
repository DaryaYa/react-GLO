import styled from "styled-components";

export const ButtonCheckout = styled.button`
  display: block;
  width: 250px;
  height: 60px;
  color: white;
  background-color: green;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: auto;
  transition-property: color, background-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: gold;
    color: brown;
  }
  &:disabled {
    color: black;
    background-color: grey;
  }
`;
