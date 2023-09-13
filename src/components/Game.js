import React, { useState } from 'react';

function Game({ stats, setStats }) {

    const [gameStage, setGameStage] = useState(1); // 1 = start, 2 = middle, 3 = end
    const [strategyChosen, setStrategyChosen] = useState(""); // "stay", "switch"
    const [correctDoor, setCorrectDoor] = useState((Math.floor(Math.random() * 3) + 1)); // doors 1, 2, 3
    const [chosenDoor, setChosenDoor] = useState(0); // doors 1, 2, 3
    const [goatDoor, setGoatDoor] = useState(0);
    const [switchDoor, setSwitchDoor] = useState(0);

    const doorContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }

    const regularDoorStyle = {
        width: "25%",
        height: "175px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    const chosenDoorStyle = {
        width: "25%",
        height: "175px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    // const correctDoorStyle = {
    //     backgroundColor: "green"
    // }

    // const incorrectDoorStyle = {
    //     backgroundColor: "red"
    // }

    const doorText = {
        fontSize: "2rem"
    }

    let gameText = "";
    switch(gameStage) {
        case 1:
            gameText = "Choose a door...";
            break;
        case 2:
            gameText = `You chose door ${chosenDoor}. The prize is not behind Door ${goatDoor}. Would you like to stay with Door ${chosenDoor} or switch to Door ${switchDoor}?`;
            break;
        case 3:
            const result = chosenDoor === correctDoor ? "You Win!" : "You Lose!";
            gameText = `You chose to ${strategyChosen}. The correct door was Door ${chosenDoor}. ${result}`;
            break;
        default:
            gameText = "ERROR: This should not be displayed.";
            break;
    }

    function handleUpdateStats() {
        if (strategyChosen === "stay" && chosenDoor === correctDoor) { // stay | win
            setStats({
                ...stats,
                stay: {
                    wins: stats.stay.wins + 1,
                    losses: stats.stay.losses,
                    totalGames: stats.stay.totalGames + 1
                }
            });
        } else if (strategyChosen === "stay" && chosenDoor !== correctDoor) { // stay | loss
            setStats({
                ...stats,
                stay: {
                    wins: stats.stay.wins,
                    losses: stats.stay.losses + 1,
                    totalGames: stats.stay.totalGames + 1
                }
            });
        } else if (strategyChosen === "switch" && chosenDoor === correctDoor) { // switch | win
            setStats({
                ...stats,
                switch: {
                    wins: stats.switch.wins + 1,
                    losses: stats.switch.losses,
                    totalGames: stats.switch.totalGames + 1
                }
            });
        } else if (strategyChosen === "switch" && chosenDoor !== correctDoor) { // switch | loss
            setStats({
                ...stats,
                switch: {
                    wins: stats.switch.wins,
                    losses: stats.switch.losses + 1,
                    totalGames: stats.switch.totalGames + 1
                }
            });
        }   
    }

    const handleSelectDoor = (door) => {
        setChosenDoor(door);
        // below code creates array to randomly determine which goat door to reveal if there are two, also sets switchDoor
        let doorArray = [1, 2, 3];

        if (doorArray.indexOf(door) !== -1) { // check if door in array
            doorArray.splice(doorArray.indexOf(door), 1);
        }
        if (doorArray.indexOf(correctDoor) !== -1) { // check if correctDoor in array still
            doorArray.splice(doorArray.indexOf(correctDoor), 1);
        }
        if (doorArray.length === 1) {
            setGoatDoor(doorArray[0]);
            setSwitchDoor(correctDoor);
        } else {
            const goatNumber = doorArray[Math.floor(Math.random() * 2)]
            setGoatDoor(goatNumber);
            doorArray.splice(doorArray.indexOf(goatNumber), 1);
            setSwitchDoor(doorArray[0]);
        }
        setTimeout(() => {
            setGameStage(2);
        }, 500)
    }

    const handleSelectStrategy = (strat) => {
        setStrategyChosen(strat);
        // if stay, chosenDoor remains the same
        // if switch, chosenDoor becomes switchDoor
        if (strat === "switch") {
            setChosenDoor(switchDoor);
        }
        setTimeout(() => {
            setGameStage(3);
        }, 500);
    }

    const handleReset = () => {
        handleUpdateStats();
        setGameStage(1);
        setChosenDoor(0);
        setGoatDoor(0);
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
                            <p style={doorText}>Door 1</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle} onClick={() => handleSelectDoor(2)}>
                            <p style={doorText}>Door 2</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle} onClick={() => handleSelectDoor(3)}>
                            <p style={doorText}>Door 3</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                    </div>
                </div>
            }
            {
                gameStage === 2 &&
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <button 
                            className='monty-button' 
                            onClick={() => handleSelectStrategy("stay")} >
                                Stay with Door {chosenDoor}
                        </button>
                        <button 
                            className='monty-button' 
                            onClick={() => handleSelectStrategy("switch")} >
                                Switch to Door {switchDoor}
                        </button>
                    </div>
                    <div style={doorContainerStyle}>
                        <div style={chosenDoor === 1 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 1</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 2</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 3</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                    </div>
                </div>
            }
            {
                gameStage === 3 &&
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <button 
                            className='monty-button' 
                            onClick={() => handleReset()} >
                                Reset
                        </button>
                    </div>
                    <div style={doorContainerStyle}>
                        <div style={chosenDoor === 1 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 1</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 2 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 2</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                        <div style={chosenDoor === 3 ? chosenDoorStyle : regularDoorStyle}>
                            <p style={doorText}>Door 3</p>
                            {/* <p>Chosen: {chosenDoor}</p>
                            <p>Correct: {correctDoor}</p>
                            <p>Goat: {goatDoor}</p> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Game;