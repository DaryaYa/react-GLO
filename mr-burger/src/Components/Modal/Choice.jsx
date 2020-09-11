import React from "react";
import { ToppingWrap, ToppingLabel, ToppingCheckbox } from "../StyledAdds.jsx";

export const Choice = function ({ choice, changeChoice, openItem }) {
  return (
    <>
      <h3>Please choose:</h3>
      <ToppingWrap>
        {openItem.choices.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type="radio"
              name="choice"
              checked={choice === item}
              value={item}
              onChange={changeChoice}
            />
            <span>{item}</span>
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
};
