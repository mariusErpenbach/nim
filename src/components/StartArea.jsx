import React from "react";
import { Link } from "react-router-dom";
const StartArea = () =>{

    function startGame () {
        var element = document.querySelector("#game")
        element.style.display = "flex"
    }

    return (
    <div id="startArea">
    <div id="playButton" >
    <Link to="/playNim">
    <p>Play<i className="fas fa-play"></i></p>
    </Link>
    </div>
    </div>)
}

export default StartArea