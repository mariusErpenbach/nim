import React,{useState} from "react"
import LeaderBoard from "./LeaderBoard"
import StartArea from "./StartArea"
import Rules from "./Rules"
import History from "./History"
import Game from "./Game"
import data from "./leaderBoardList.json"
const GameBoard = () =>{

const [gameStatus, setGameStatus] = useState("none")
const [leaderList,setLeaderlist] = useState(data);

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
            <LeaderBoard leaderList={leaderList}/>
            <StartArea/>
        </aside>
    </main>
    <Game/>
    </div>
)
}

export default GameBoard 