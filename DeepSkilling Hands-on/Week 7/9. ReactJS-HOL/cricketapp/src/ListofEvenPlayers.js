import React from 'react';
function EvenPlayers({ IndianTeam }) {
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <div>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

export default EvenPlayers;