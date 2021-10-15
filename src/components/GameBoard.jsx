import React from "react"
import LeaderBoard from "./LeaderBoard"
import StartArea from "./StartArea"
import Rules from "./_Rules"
import Game from "./_Game"
const GameBoard = () =>{
    
return(
    <div id="gameBoard">
    <header><p>Game of Nim</p></header>
    <main>
        <aside>
            <Rules/>
        </aside>
        <aside>
            <LeaderBoard/>
            <StartArea/>
        </aside>
    </main>
    <Game style="opacity:0"/>
    </div>
)
}

export default GameBoard 