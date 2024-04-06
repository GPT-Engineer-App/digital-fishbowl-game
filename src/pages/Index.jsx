import React, { useState } from "react";
import { FaPlus, FaUsers, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState("");

  const handleCreateGame = () => {
    if (gameName) {
      const newGame = {
        name: gameName,
        players: [],
        id: Math.random().toString(36).substr(2, 9), // simple unique ID generator
      };
      setGames([...games, newGame]);
      setGameName("");
    }
  };

  const handleJoinGame = (gameId) => {
    // Placeholder function for joining a game
    console.log(`Joining game with ID: ${gameId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Fishbowl Game</h1>

      <div className="mb-8">
        <label htmlFor="gameName" className="block text-lg mb-2">
          Create a New Game
        </label>
        <div className="flex">
          <input type="text" id="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-l-lg" placeholder="Enter game name" />
          <button onClick={handleCreateGame} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg">
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Games</h2>
        <ul className="space-y-4">
          {games.map((game) => (
            <li key={game.id} className="p-4 border border-gray-300 rounded-lg flex justify-between items-center">
              <span>{game.name}</span>
              <button onClick={() => handleJoinGame(game.id)} className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg flex items-center">
                <FaUserPlus className="mr-2" />
                Join Game
              </button>
            </li>
          ))}
        </ul>
        {games.length === 0 && <div className="text-center text-gray-500">No games available. Create a new game to get started.</div>}
      </div>
    </div>
  );
};

export default Index;
