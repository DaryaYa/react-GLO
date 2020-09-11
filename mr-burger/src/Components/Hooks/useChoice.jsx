import { useState } from "react";

export const useChoice = function () {
  const [choice, setChoice] = useState();

  function changeChoice(event) {
    setChoice(event.target.value);
  }

  return { choice, changeChoice };
};