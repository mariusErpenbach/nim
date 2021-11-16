import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
// import PhaseOne from "./PhaseOne";
import PhaseStart from "./PhaseStart";

const Game = (props) =>{
const [numberOfSticks, setNumberOfSticks] = useState("")
function getNumberOfSticks  (nos) {
setNumberOfSticks(nos)
}
const [gameStatus, setGameStatus] = useState("start")
const [content, setContent] = useState("")
useEffect(() => {
  console.log("Game useEffect fired")
switch (gameStatus) {
    case "start":
        {
            setContent(<PhaseStart function={getNumberOfSticks} nos={numberOfSticks}/>)
        }
        break;
    
        
    default:
        break;
}
}, [gameStatus])

 
    function exitGame () {
        var element = document.querySelector("#game")
        element.style.display = "none" 
    }


    return (
        <div id="game">
        <div id="exitGame" ><i className="fas fa-times" onClick={exitGame}></i></div>
        <main>
        {content}
        </main>
        </div>
    )
}

export default Game