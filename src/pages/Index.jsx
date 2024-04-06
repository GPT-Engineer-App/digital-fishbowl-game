import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameRules from "./GameRules";

const Index = () => {
  const [showRules, setShowRules] = useState(false);
  const [gameName, setGameName] = useState("");
  const [rounds, setRounds] = useState(3);
  const navigate = useNavigate();

  const handleCreateGame = (e) => {
    e.preventDefault();
    navigate("/game", { state: { gameName, rounds } });
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setShowRules(!showRules)} className="mt-4 mb-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        {showRules ? "Hide Game Rules" : "Show Game Rules"}
      </button>

      {showRules && <GameRules />}

      <form onSubmit={handleCreateGame} className="mt-8">
        <div className="mb-4">
          <label htmlFor="gameName" className="block text-gray-700 font-bold mb-2">
            Game Name:
          </label>
          <input type="text" id="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="rounds" className="block text-gray-700 font-bold mb-2">
            Number of Rounds:
          </label>
          <input type="number" id="rounds" value={rounds} onChange={(e) => setRounds(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="1" max="10" required />
        </div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Game
        </button>
      </form>
    </div>
  );
};

export default Index;
