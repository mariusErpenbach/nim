import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";
import PlayerTurn from "./PlayerTurn";
import ComputerTurn from "./ComputerTurn";
const Game = (props) => {
  const [stackOne, setstackOne] = useState(0);
  const [stackTwo, setstackTwo] = useState(0);
  const [stackThree, setstackThree] = useState(0);
  const [Turn, setTurn] = useState("");

  const stackSplitterFinished = () => {
    setstackOne(document.getElementById("stackOne").innerHTML);
    setstackTwo(document.getElementById("stackTwo").innerHTML);
    setstackThree(document.getElementById("stackThree").innerHTML);
    disabler("game","stackSplitter")
    disabler ("stackArea", "extraStack")
    gameStarter()
  };

  const disabler = (parent,child) => {
    let parentElement = document.getElementById(parent);
    let childElement = document.getElementById(child)
    return parentElement.removeChild(childElement)
  }

  const gameStarter = () => {
    setTurn("Player")
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

        {Turn === "Player" ? <PlayerTurn/> : <div />}
        {Turn === "Computer" ? <ComputerTurn /> : <div />}
        <StackSplitter
          finisher={stackSplitterFinished}
        
          stackOne={stackOne}
          stackTwo={stackTwo}
          stackThree={stackThree}
        />
      </div>
    </React.Fragment>
  );
};

export default Game;
