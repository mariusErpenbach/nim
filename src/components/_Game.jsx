import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";

const Game =(props) =>{

const [gameStatus,setGameStatus] = useState(props.status);

 
    function exitGame () {
        var element = document.querySelector("#game")
        element.style.display = "none" 
       
    }


    return (
        <div id="game">
        <div id="exitGame" onClick={exitGame}><i class="fas fa-times"></i></div>
        </div>
    )
}

export default Game