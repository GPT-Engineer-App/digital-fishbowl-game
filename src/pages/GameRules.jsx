import React from "react";

const GameRules = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
      <h3 className="text-lg font-semibold mb-4">How to Play the Fishbowl Game</h3>
      <p className="mb-2">The "fishbowl game" is a fun and engaging party game that combines elements of charades, password, and taboo. It's typically played with a large group of people and involves several rounds, each with different rules for communication.</p>
      <h4 className="font-semibold mb-2">Setup:</h4>
      <p className="mb-2">Each player writes down a few words or phrases on pieces of paper. These are placed in a bowl or container.</p>
      <h4 className="font-semibold mb-2">Dividing into Teams:</h4>
      <p className="mb-2">Players divide into two or more teams. Teams take turns to guess words in a set time limit.</p>
      <h4 className="font-semibold mb-2">Round One (Taboo):</h4>
      <p className="mb-2">Players try to get teammates to guess the word without saying it directly or using "taboo" words.</p>
      <h4 className="font-semibold mb-2">Round Two (Password):</h4>
      <p className="mb-2">The player can only use one single word as a clue for teammates to guess the original word or phrase.</p>
      <h4 className="font-semibold mb-2">Round Three (Charades):</h4>
      <p className="mb-2">Players act out the word or phrase without using words or verbal hints.</p>
      <h4 className="font-semibold mb-2">Scoring:</h4>
      <p>Teams score points for correct guesses. The team with the most points after all rounds wins.</p>
    </div>
  );
};

export default GameRules;
