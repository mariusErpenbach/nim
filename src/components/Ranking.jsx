import React from "react";

const Ranking = (props) => {
    var unrankedList = props.leaderList;
    var rankedList = []
    // using this for loop to sort the leaderList
    for (let i=0;i<unrankedList.length;i++){
        // reduce the array of object to find and push the highest score.
        let highestRank = unrankedList.reduce((acc, stats) => acc && acc.Sticks / acc.Turns > stats.Sticks / stats.Turns ? acc : stats, null);
        rankedList.push(highestRank)
        // remove the highest rank of this iteration.
        unrankedList.splice(unrankedList.indexOf(highestRank),unrankedList.indexOf(highestRank)+1)
        // repeat itereration by decreasing itereration counter
        i--
        ;}
    // array to return:
    console.log(rankedList)

    return( <table><tbody>
        {rankedList.map((item,t)=>(
            <tr key={item.Name} className="playerStats">
                <th className="rankIcon">{t+1}</th>
                <th className="playerName">{item.Name}</th>
                <th className="playerSticks">{item.Sticks}</th>
                <th className="playerTurns">{item.Turns}</th>
                <th className="playerTime">{item.Time}</th>
                <th className="playerScore" >{parseFloat(item.Sticks/item.Turns).toFixed(1)}</th>
            </tr>)
        )}</tbody></table>);
}
export default Ranking