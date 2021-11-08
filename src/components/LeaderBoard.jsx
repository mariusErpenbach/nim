import React,{useState} from "react";
import data from "./leaderBoardList.json"
const LeaderBoard = () => {

    const [leaderList,setLeaderlist] = useState(data);

    const currentLeaderBoard = () => {
        for (let i=0;i>leaderList.length;i++){
            console.log("lol")
        }
    }


    return (
    <div id="leaderBoard">
    
    </div>)
}

export default LeaderBoard