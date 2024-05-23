import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function BingoBall({ ball }) {
  return (
    <div style={{ backgroundColor: ball.drawn ? 'lightgray' : 'white', padding: '10px', textAlign: 'center' }}>
      {ball.number}
    </div>
  );
}
 
function ListOfBalls({ balls }) {
  return (
    <div id="listOfNumbers" style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gridGap: '10px' }}>
      {balls.map((ball, index) => (
        <BingoBall key={index} ball={ball} />
      ))}
    </div>
  );
}
 
function LastDrawnBalls({ balls }) {
  const lastDrawnBalls = balls.filter(ball => ball.drawn).sort((a, b) => a.drawnOrder - b.drawnOrder).slice(-5);
  return (
    <div id="lastDrawnBalls">
      {lastDrawnBalls.map((ball, index) => (
        <BingoBall key={index} ball={ball} />
      ))}
    </div>
  );
}
 
 function BingoGame() {
  const initialBalls = Array.from({length: 75}, (_, i) => ({number: i+1, drawn: false, drawnOrder: null}));
  const [balls, setBalls] = useState(initialBalls);

  const drawBall = () => {
    let remainingBalls = balls.filter(ball => !ball.drawn);
    if (remainingBalls.length === 0) return;

    let drawnBall = remainingBalls[Math.floor(Math.random() * remainingBalls.length)];
    let drawnOrder = balls.filter(ball => ball.drawn).length + 1;
    setBalls(balls.map(ball => ball.number === drawnBall.number ? {...ball, drawn: true} : ball));
  };

  const resetGame = () => {
    setBalls(initialBalls);
  };

  return (
   <div>
     <LastDrawnBalls balls={balls} />
     <div id="buttonbar">
       <button onClick={drawBall}>Draw Ball</button>
       <button onClick={resetGame}>Reset Game</button>
     </div>
     <ListOfBalls balls={balls} />
   </div>
 );
}

export default BingoGame;
