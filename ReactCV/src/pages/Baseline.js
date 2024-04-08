import "../App.css";

// Import dependencies
import React from "react";
import GameTemplate from "../components/GameTemplate";
import { letterBank } from "../constants/wordBank";

function AllClasses() {
  const wordBank = letterBank;
  wordBank.splice(9, 1); // remove j
  wordBank.splice(24, 1); // remove z
  return (
    <GameTemplate
      id="extended"
      title="Alphabet Game"
      description={
        "This model was trained on 24 alphabets for a more holistic representation of a sign language alphabet game. The letters 'J' and 'Z' were excluded as they are dynamic signs that involve motion."
      }
      wordBank={wordBank}
      modelUrl={
        "https://raw.githubusercontent.com/AjnasNB/LearnSign/main/ReactCV/src/fun/model.json"
      }
    />
  );
}

export default AllClasses;
