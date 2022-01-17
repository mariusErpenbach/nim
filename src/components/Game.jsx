import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";
import PlayerTurn from "./PlayerTurn";
import ComputerTurn from "./ComputerTurn";
import Repeat from "./Repeat";
const Game = (props) => {

  const [Turn, setTurn] = useState("");
const [gameStatus, setgameStatus] = useState("inProgress")
  const stackSplitterFinished = () => {
 
    disabler("game","stackSplitter")
    disabler ("stackArea", "extraStack")
    gameStarter()
  };

  const winningCondition = () =>{

    let stacks = document.getElementsByClassName("stacks")
    let emptyStacks = []
    for (let i=0;i<stacks.length;i++){
        if (stacks[i].innerHTML==="0"){
            emptyStacks.push(stacks[i])
        }
    }
    if (emptyStacks.length===3){
    return true
  }else return false
}

  const disabler = (parent,child) => {
    let parentElement = document.getElementById(parent);
    let childElement = document.getElementById(child)
    return parentElement.removeChild(childElement)
  }

  const gameStarter = () => {
    setTurn("Player")
  }

const passTurn = () => {
    if (winningCondition()){
      alert (`End${Turn} won`)
      setTurn("repeat")
    }
    else {
   Turn === "Player" ? setTurn("Computer"):setTurn("Player")}  
}


  return (
    <React.Fragment>
      <div id="game">
        <header id="exitFrame">
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </header>
      
     
        <div id="stackArea">
          <main>
            <div className="stacks" id="stackOne">
              
            </div>
            <div className="stacks" id="stackTwo" >
              
            </div>
            <div className="stacks" id="stackThree">
            </div>
          </main>
          <aside id="extraStack">
            <p id="bigStack"></p>
          </aside>
        </div>
        
<div>
        {Turn=="Player" ? <PlayerTurn passTurn={passTurn} winningCondition={winningCondition}/> : <div/>}
        {Turn=="Computer"? <ComputerTurn passTurn={passTurn} winningCondition={winningCondition}/> :<div/>}
        {Turn=="repeat"?<Repeat/>:<div/>}
</div>

        <StackSplitter
          finisher={stackSplitterFinished}
        />
      </div>
    </React.Fragment>
  );
};

export default Game;
