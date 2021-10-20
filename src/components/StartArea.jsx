import React from "react";

const StartArea = (props) =>{
    function startGame () {
        var element = document.querySelector("#game")
        element.style.display = "flex"
      
    }

    return (<div id="startArea">
    <div id="playButton" ><i className="fas fa-play" onClick={startGame}></i></div>
</div>)
}

export default StartArea