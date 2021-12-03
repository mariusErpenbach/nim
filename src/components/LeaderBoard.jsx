import React,{useState,useEffect} from "react";


const LeaderBoard = (props) => {

  var leaderListItems = [];
const ranking =()=> {
  
    const leaderboard = props.leaderList;
  
      
       // using this for loop to sort the leaderList 
      for (let i=0;i<leaderboard.length;i++){
        // reduce the array of object to find and push the highest score.
        let highestRank = leaderboard.reduce((acc, stats) => acc && acc.Sticks / acc.Turns > stats.Sticks / stats.Turns ? acc : stats, null);
        leaderListItems.push(highestRank)
        // remove the highest rank of this iteration.
        leaderboard.splice(leaderboard.indexOf(highestRank),leaderboard.indexOf(highestRank)+1)
        // repeat itereration by decreasing itereration counter
        i--
      ;}
      // array to return:
      console.log(leaderListItems)
      return leaderListItems
    }
 

    const items = props.leaderList.map((item,i)=>(
    <div className="playerStats">
    <div className="playerName">{item.Name}</div>
    <div className="playerSticks">{item.Sticks}</div>
    <div className="playerTurns">{item.Turns}</div>
    <div className="playerTime">{item.Time}</div>
    </div>)
    
    )
    
    
    return(
    <React.Fragment>
    <div id="leaderBoard">
      <h2>Leaderboard</h2>
      <div id="leaderboardFrame">{items}</div>
      <div></div>
    </div>
    </React.Fragment>
  )
}

export default LeaderBoard