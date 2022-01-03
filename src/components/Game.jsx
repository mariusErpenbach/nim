import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
// import PhaseOne from "./PhaseOne";
import PhaseStart from "./PhaseStart";

const Game = (props) =>{

    return (
        <React.Fragment>
        <div id="game">
        <header id="exitFrame">  
        <Link to="/">
        <div id="exitGame" ><i className="fas fa-times"></i></div>
        </Link>
        </header>
      
        <main>
        <form><p>chose number of Sticks</p>
        <input type="number" onChange={console.log(this)}></input> 
        </form>
        <button type="submit">Accept</button>
        </main>
        </div>
        </React.Fragment>
    )
}

export default Game