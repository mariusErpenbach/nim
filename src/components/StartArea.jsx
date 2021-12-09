import React from "react";

const StartArea = () =>{

    function startGame () {
        var element = document.querySelector("#game")
        element.style.display = "flex"
    }

    return (
    <div id="startArea">
    <div id="playButton" onClick={startGame}>
    <p>Play<i className="fas fa-play" ></i></p>
    </div>
    </div>)
}

export default StartArea