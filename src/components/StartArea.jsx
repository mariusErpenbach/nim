import React from "react";

const StartArea = () =>{

    function startGame () {
        var element = document.querySelector("#game")
        element.style.display = "flex"
    }

    return (<div id="startArea">
    <div id="playButton" >
 
    <i className="fas fa-play" onClick={startGame}></i>   <p>Start the game</p></div>
    </div>)
}

export default StartArea