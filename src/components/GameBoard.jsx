import React,{useState} from "react"
import LeaderBoard from "./LeaderBoard"

import Rules from "./Rules"
import History from "./History"
import Game from "./Game"
import data from "./leaderBoardList.json"
import dividerOne from "../img/divider1.png"
const GameBoard = () =>{
    

const [leaderList,setLeaderlist] = useState(data);


return(
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
            <LeaderBoard leaderList={leaderList}/>
            
        </aside>
    </main>
    <Game/>
    </div>
)
}

export default GameBoard 