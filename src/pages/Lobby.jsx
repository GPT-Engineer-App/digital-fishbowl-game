import React from "react";
import { useLocation } from "react-router-dom";

const Lobby = () => {
  const location = useLocation();
  const { gameName, rounds, timePerTurn, wordsPerPlayer, sessionId } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Game Lobby</h1>
      <p className="mb-2">Session ID: {sessionId}</p>
      <p className="mb-2">Game Name: {gameName}</p>
      <p className="mb-2">Number of Rounds: {rounds}</p>
      <p className="mb-2">Time per Turn: {timePerTurn} seconds</p>
      <p className="mb-2">Words per Player: {wordsPerPlayer}</p>
      {}
    </div>
  );
};

export default Lobby;
