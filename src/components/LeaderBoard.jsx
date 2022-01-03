import React,{useState,useEffect} from "react";
import StartArea from "./StartArea"
import data from "./leaderBoardList.json"
import Ranking from "./Ranking";

const LeaderBoard = (props) => {

const [leaders, setleaders] = useState(data)
  
    return(
  
    <div id="leaderBoard">
      <div id="leaderboardFrame">
      <h2><i className="fas fa-trophy"></i> Leaderboard</h2>
     
      <Ranking leaderList={leaders}/>
      
     
      
      <p>Time/Sticks=Score</p>
      </div>
      <StartArea/>
    </div>
   
  )
}

export default LeaderBoard