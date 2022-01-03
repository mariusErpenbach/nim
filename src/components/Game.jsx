import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Game = (props) =>{

    const [numberOfSticks, setnumberOfSticks] = useState(0)

useEffect(() => {
    console.log("Game-effect-fired")
    return function cleanup() {
       console.log("cleaned up")
      };
})

    return (
        <React.Fragment>
        <div id="game">
        <header id="exitFrame">  
        <Link to="/">
        <div id="exitGame" ><i className="fas fa-times"></i></div>
        </Link>
        </header>
      
        
        
        <main>
       <p>choose number of Sticks</p>
        <input id="stickAmount" type="number"></input> 
        <button onClick={()=>setnumberOfSticks(document.getElementById("stickAmount").value)}>Accept</button>
        <div id="bigStack">{numberOfSticks}</div>
        </main>
        </div>
        </React.Fragment>
    )
}

export default Game