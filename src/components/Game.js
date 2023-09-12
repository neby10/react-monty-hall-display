import React, { useState } from 'react';

function Game({ stats, chosenDoor, setChosenDoor, correctDoor, setCorrectDoor, stategyChosen, setStrategyChosen }) {

    const [gameStage, setGameStage] = useState(1); // 1 = start, 2 = middle, 3 = end

    const doorContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    const regularDoorStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "10px",
        border: "1px solid black"
    }

    const chosenDoorStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: "gray"
    }

    const correctDoorStyle = {
        backgroundColor: "green"
    }

    const incorrectDoorStyle = {
        backgroundColor: "red"
    }

    let gameText = "";
    switch(gameStage) {
        case 1:
            gameText = "Choose a door...";
            break;
        case 2:
            gameText = "The prize is not behind Door X. What would you like to do?";
            break;
        case 3:
            gameText = `You chose to ${stategyChosen}. The correct door was Door Z.\nYou Win`;
            break;
        default:
            gameText = "ERROR: This should not be displayed.";
            break;
    }

    const handleSelectDoor = (door) => {
        setChosenDoor(door);
        setTimeout(() => {
            setGameStage(2);
        }, 2000)
    }

    const handleSelectStrategy = (strat) => {
        setStrategyChosen(strat);
        setTimeout(() => {
            setGameStage(3);
        }, 2000);
    }

    const handleReset = () => {
        if (chosenDoor === correctDoor) {
            stats.wins += 1;
        }
        setGameStage(1);
        setChosenDoor(0);
        setCorrectDoor((Math.floor(Math.random() * 3) + 1));
    }


    return (
        <div className='Game'>
            <p>{gameText}</p>
            {
                gameStage === 1 && 
                <div>
                    <div style={doorContainerStyle}>
                        <div style={chosenDoor === 1 ? chosenDoorStyle : regularDoorStyle} onClick={() => handleSelectDoor(1)}>
                            <p>Door 1</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle} onClick={() => handleSelectDoor(2)}>
                            <p>Door 2</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle} onClick={() => handleSelectDoor(3)}>
                            <p>Door 3</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                        </div>
                    </div>
                </div>
            }
            {
                gameStage === 2 &&
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <button onClick={() => handleSelectStrategy("stay")}>Stay with Door {chosenDoor}</button>
                        <button onClick={() => handleSelectStrategy("switch")}>Switch to Door X</button>
                    </div>
                    <div style={doorContainerStyle}>
                        <div style={chosenDoor === 1 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 1</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 2</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 3</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                    </div>
                </div>
            }
            {
                gameStage === 3 &&
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <button onClick={() => handleReset()} >Reset</button>
                    </div>
                    <div style={doorContainerStyle}>
                        <div style={chosenDoor === 1 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 1</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 2</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle}>
                            <p>Door 3</p>
                            <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Strat: {stategyChosen}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Game;