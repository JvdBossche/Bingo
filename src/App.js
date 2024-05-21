import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';

function BingoBall({ ball }) {
   return (
     <div style={{ backgroundColor: ball.drawn ? 'lightgray' : 'white' }}>
       {ball.number}
     </div>
   );
 }
 
 function BingoBalls({ balls }) {
   return (
     <div>
       {balls.map((ball, index) => (
         <BingoBall key={index} ball={ball} />
       ))}
     </div>
   );
 }
 
 function LastDrawnBalls({ balls }) {
   const lastDrawnBalls = balls.filter(ball => ball.drawn).slice(-5);
   return (
     <div>
       {lastDrawnBalls.map((ball, index) => (
         <BingoBall key={index} ball={ball} />
       ))}
     </div>
   );
 }
 
 function BingoGame() {
  const initialBalls = Array.from({length: 75}, (_, i) => ({number: i+1, drawn: false}));
  const [balls, setBalls] = useState(initialBalls);

  const drawBall = () => {
    let remainingBalls = balls.filter(ball => !ball.drawn);
    if (remainingBalls.length === 0) return;

    let drawnBall = remainingBalls[Math.floor(Math.random() * remainingBalls.length)];
    setBalls(balls.map(ball => ball.number === drawnBall.number ? {...ball, drawn: true} : ball));
  };

  // TODO: Implement reset function and components to display the balls

  return (
   <div>
     <LastDrawnBalls balls={balls} />
     <div id="buttonbar">
       <button onClick={drawBall}>Draw Ball</button>
     </div>
     <BingoBalls balls={balls} />
   </div>
 );
}

export default BingoGame;
