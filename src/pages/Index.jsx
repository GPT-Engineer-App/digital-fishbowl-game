import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameRules from "./GameRules";

const Index = () => {
  const [showRules, setShowRules] = useState(false);
  const [gameName, setGameName] = useState("");
  const [rounds, setRounds] = useState(3);
  const [timePerTurn, setTimePerTurn] = useState(60);
  const [wordsPerPlayer, setWordsPerPlayer] = useState(5);
  const [sessionId, setSessionId] = useState("");
  const navigate = useNavigate();

  const handleCreateGame = (e) => {
    e.preventDefault();

    const newSessionId = Math.random().toString(36).substring(7);
    navigate("/lobby", { state: { gameName, rounds, timePerTurn, wordsPerPlayer, sessionId: newSessionId } });
  };

  const handleJoinGame = (e) => {
    e.preventDefault();

    navigate("/lobby", { state: { sessionId } });
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setShowRules(!showRules)} className="mt-4 mb-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        {showRules ? "Hide Game Rules" : "Show Game Rules"}
      </button>

      {showRules && <GameRules />}

      <form onSubmit={handleCreateGame} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Create New Game</h2>
        <div className="mb-4">
          <label htmlFor="gameName" className="block text-gray-700 font-bold mb-2">
            Game Name:
          </label>
          <input type="text" id="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="rounds" className="block text-gray-700 font-bold mb-2">
            Number of Rounds:
          </label>
          <input type="number" id="rounds" value={rounds} onChange={(e) => setRounds(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="1" max="10" required />
        </div>
        <div className="mb-4">
          <label htmlFor="timePerTurn" className="block text-gray-700 font-bold mb-2">
            Time per Turn (seconds):
          </label>
          <input type="number" id="timePerTurn" value={timePerTurn} onChange={(e) => setTimePerTurn(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="30" max="120" required />
        </div>
        <div className="mb-6">
          <label htmlFor="wordsPerPlayer" className="block text-gray-700 font-bold mb-2">
            Words per Player:
          </label>
          <input type="number" id="wordsPerPlayer" value={wordsPerPlayer} onChange={(e) => setWordsPerPlayer(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="3" max="10" required />
        </div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Game
        </button>
      </form>

      <form onSubmit={handleJoinGame} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Join Existing Game</h2>
        <div className="mb-6">
          <label htmlFor="sessionId" className="block text-gray-700 font-bold mb-2">
            Session ID:
          </label>
          <input type="text" id="sessionId" value={sessionId} onChange={(e) => setSessionId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Join Game
        </button>
      </form>
    </div>
  );
};

export default Index;
