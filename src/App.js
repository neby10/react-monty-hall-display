import './App.css';
import React, { useState } from 'react';
import Graph from './components/Graph';
import StatPanel from './components/StatPanel';
import Game from './components/Game';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';

function App() {

  const [correctDoor, setCorrectDoor] = useState((Math.floor(Math.random() * 3) + 1)); // doors 1, 2, 3
  const [chosenDoor, setChosenDoor] = useState(0); // doors 1, 2, 3
  const [strategyChosen, setStrategyChosen] = useState("");
  const [stats, setStats] = useState({
    stay: {
      wins: 0,
      losses: 0,
      totalGames: 0,
    },
    switch: {
      wins: 0,
      losses: 0,
      totalGames: 0,
    }
  })

  const gameRulesString = `
    The Monty Hall Problem is based on the game played on the Let's Make a Deal game show named after the host of the show, Monty Hall. The game goes something like this:

    You are on a game show and are given the choice of three doors. Behind one door is a Brand New Car but behind the other two doors are goats. You pick one of the three doors. The host opens a different door than the one you picked and reveals a goat. The host asks you, 'Do you want to switch your pick to the other door or do you want to stay with your original pick?

    Is it in your interest to switch your choice?

    To play, select a door then decide to stay or switch. The correct door will be shown and the stats will update. Then you can continue to play to get a larger sample size.`

  const handleClickRules = (event) => {
    alert(gameRulesString);
  }

  return (
    <div className='App'>
      <div className='App-main'>
        <h1 className='App-main-title'>The Monty Hall Problem</h1>
        <button onClick={handleClickRules}>Click here to read game rules!</button>
        <Game 
          stats={stats}
          chosenDoor={chosenDoor} 
          setChosenDoor={setChosenDoor}
          correctDoor={correctDoor}
          setCorrectDoor={setCorrectDoor}
          strategyChosen={strategyChosen}
          setStrategyChosen={setStrategyChosen} />
      </div>
      <ImageCard />
      <Graph stats={stats} />
      <StatPanel stats={stats} />
      <Footer />
    </div>
  );
}

export default App;
