import React,{useState} from "react"
import LeaderBoard from "./LeaderBoard"
import StartArea from "./StartArea"
import Rules from "./_Rules"
import History from "./_History"
import Game from "./_Game"

const GameBoard = () =>{

const [gameStatus, setGameStatus] = useState("none")



return(
    <div id="gameBoard">
    <header><p>Game of Nim</p></header>
    <main>
        <aside>
            <History/>
            <Rules/>
        </aside>
        <div className="gameboard-mid-line"><div></div></div>
        <aside>
            <LeaderBoard/>
            <StartArea/>
        </aside>
    </main>
    <Game/>
    </div>
)
}

export default GameBoard 