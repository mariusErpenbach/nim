import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";
import PlayerTurn from "./PlayerTurn";
import ComputerTurn from "./ComputerTurn";
const Game = (props) =>{


const [Turn, setTurn] = useState("Player")



    return (
        <React.Fragment>
        <div id="game">
        <header id="exitFrame">  
        <Link to="/"><i className="fas fa-times"></i></Link>
        </header>
        <div id="stackArea">
        <main>
        <div className="stacks"><p id="stackOne"></p></div>
        <div className="stacks"><p id="stackTwo"></p></div>
        <div className="stacks"><p id="stackThree"></p></div>
        </main>
        <aside><p id="bigStack"></p></aside>
        </div>
        
        {Turn==="Player"? <PlayerTurn/> : <ComputerTurn/>}
        <StackSplitter/>
        
 
        </div>
        </React.Fragment>
    )
}

export default Game