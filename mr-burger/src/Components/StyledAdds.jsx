import styled from "styled-components";

const ToppingWrap = styled.div`
  column-count: 2;
  column-gap: 15px;
  margin: auto;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingCheckbox = styled.input`
  margin-right: 5px;
`;

export { ToppingWrap, ToppingLabel, ToppingCheckbox };