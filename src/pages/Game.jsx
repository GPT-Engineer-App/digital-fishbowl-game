import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const { gameName, rounds } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{gameName}</h1>
      <p>Number of Rounds: {rounds}</p>
      {}
    </div>
  );
};

export default Game;
