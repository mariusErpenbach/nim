import React,{useState} from "react"

import LeaderBoard from "./LeaderBoard"

import Rules from "./Rules"
import History from "./History"


import dividerOne from "../img/divider1.png"

const GameBoard = () =>{
    


   

 

return(
    <React.Fragment>
    <div id="gameBoard">
    <header>
    <img src={dividerOne}></img>
    <p>Nim</p>
    <img src={dividerOne}></img>
    </header>
    <main>
        <aside>
            <History/>
            <Rules/>
        </aside>
        <div className="gameboard-mid-line">  <img src={dividerOne}></img></div>
        <aside>
            <LeaderBoard/>
            
        </aside>
    </main>

    </div>
    </React.Fragment>
)
}

export default GameBoard 