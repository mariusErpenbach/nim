import React,{useState} from "react"

import LeaderBoard from "./LeaderBoard"

import Rules from "./Rules"
import History from "./History"




const GameBoard = () =>{
    


   

 

return(
    <React.Fragment>
    <div id="gameBoard">
    <header>
  
    <p>Nim</p>
   
    </header>
    <main>
        <aside>
            <History/>
            <Rules/>
        </aside>
        <div className="gameboard-mid-line">  </div>
        <aside>
            <LeaderBoard/>
            
        </aside>
    </main>

    </div>
    </React.Fragment>
)
}

export default GameBoard 