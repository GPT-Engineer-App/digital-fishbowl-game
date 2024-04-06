import React, { useState } from "react";
import GameRules from "./GameRules";

const Index = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setShowRules(!showRules)} className="mt-4 mb-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        {showRules ? "Hide Game Rules" : "Show Game Rules"}
      </button>

      {showRules && <GameRules />}
    </div>
  );
};

export default Index;
