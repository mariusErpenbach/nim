import React,{useState,useEffect} from "react";


const LeaderBoard = (props) => {

const ranking =()=> {
  
    const leaderboard = props.leaderList;
  
          
  
   let  leaderListItems =[]
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
  

    const items = props.leaderList.map((item,t)=>(
    <tr className="playerStats">
    <th className="rankIcon">{t+1}</th>
    <th className="playerName">{item.Name}</th>
    <th className="playerSticks">{item.Sticks}</th>
    <th className="playerTurns">{item.Turns}</th>
    <th className="playerTime">{item.Time}</th>
    <th className="playerScore" >{parseFloat(item.Sticks/item.Turns).toFixed(1)}</th>
    </tr>
    
    )
    
    )
 
    
    return(
    <React.Fragment>
    <div id="leaderBoard">
      <h2><i className="fas fa-trophy"></i> Leaderboard</h2>
      <div id="leaderboardFrame">
      <table>
      <tr >
      <th>#</th>
      <th>Player</th>
      <th>Sticks</th>
      <th>Turns</th>
      <th>Time</th>
      <th className="playerScore">Score</th>
      </tr>
      {items}
      </table>
      <p>Time/Sticks=Score</p>
      </div>
      
    </div>
    </React.Fragment>
  )
}

export default LeaderBoard