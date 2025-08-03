import React from 'react';

function Scorebelow70({ players }) {
  const filteredPlayers = players.filter(player => player.score <= 70);

  return (
    <div>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;