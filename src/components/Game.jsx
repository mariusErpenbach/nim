import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";
import PlayerTurn from "./PlayerTurn";
import ComputerTurn from "./ComputerTurn";
const Game = (props) =>{

const [stackOne, setstackOne] = useState(0)
const [stackTwo, setstackTwo] = useState(0)
const [stackThree, setstackThree] = useState(0)
const [NoS, setNoS] = useState(0)
const [Turn, setTurn] = useState("")

const stackSplitterFinished = () => {
setstackOne(document.getElementById("stackOne").innerHTML)
setstackTwo(document.getElementById("stackTwo").innerHTML)
setstackThree(document.getElementById("stackThree").innerHTML)
let parentElement = document.getElementById("game")
let stackSplitterElement = document.getElementsByClassName("stackSplitter")
parentElement.removeChild(stackSplitterElement[0])
}
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
        
        {Turn==="Player"? <PlayerTurn/>:<div/>}
        {Turn==="Computer"? <ComputerTurn/>:<div/>}
        <StackSplitter  finisher={stackSplitterFinished}
        active={true}
        stickAmount={NoS}
        stackOne = {stackOne}
        stackTwo = {stackTwo}
        stackThree = {stackThree}
         />
        
 
        </div>
        </React.Fragment>
    )
}

export default Game