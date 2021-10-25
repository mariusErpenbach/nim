import React from "react";
import { useEffect } from "react";
const PhaseStart= (props) =>{

    const handleChange = () =>{
        // if input is filled with a value between 3 and 100 we activate the next start button
        var element = document.querySelector("#numberOfSticksInput")
        if(element.value>3 && element.value<100){
        var element = document.querySelector("#phaseStartAcceptInputButton")
        element.style.display = "flex"
        }
    }

    return (<div id="phaseStart">
    <header> select number of sticks(3-100)</header>
    <div><input type="number" id="numberOfSticksInput" onChange={handleChange}></input> <button>Random</button></div>
    <div id="phaseStartAcceptInputButton" >Lets go</div>
    </div>
)
}

export default PhaseStart 