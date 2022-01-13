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


useEffect(() => {
    console.log("game effect fired")
    return () => {
        console.log("game clean effect fired")
    }
}, [NoS])

const stackSplitterChange = (stack) => {
console.log("yippi")
}
    return (
        <React.Fragment>
        <div id="game">
        <header id="exitFrame">  
        <Link to="/"><i className="fas fa-times"></i></Link>
        </header>
        
        
        {Turn==="Player"? <PlayerTurn/>:<div/>}
        {Turn==="Computer"? <ComputerTurn/>:<div/>}
        <StackSplitter  onChange={stackSplitterChange}
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