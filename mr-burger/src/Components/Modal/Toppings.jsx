import React from "react";
import { ToppingWrap, ToppingLabel, ToppingCheckbox } from '../StyledAdds';
// import styled from "styled-components";

// const ToppingWrap = styled.div`
// 	column-count: 2;
// 	column-gap: 15px;
// 	margin: auto;
// `;

// const ToppingLabel = styled.label`
// 	cursor: pointer;
// 	display: block;
// `;

// const ToppingCheckbox = styled.input`
//   margin-right: 5px;
// `;

export const Toppings = function ({ toppings, checkToppings }) {
  return (
    <>
      <h3>Toppings</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            <span>{item.name}</span>
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
};