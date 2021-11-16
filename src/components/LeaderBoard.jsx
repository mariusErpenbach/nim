import React from "react";


const LeaderBoard = (props) => {


const boardStats = () => {

}
   
   
  console.log(props.leaderList)
    const items = props.leaderList.map((item, i) => ( 
       <div> {i}</div>
      ));      

    return (
    <React.Fragment>
    <div id="leaderBoard">
    <h2>Leaderboard</h2>
        {items}
    </div>
    </React.Fragment>)
}

export default LeaderBoard