import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Game = (props) =>{

    const [numberOfSticks, setnumberOfSticks] = useState(0)

useEffect(() => {
 document.getElementById("bigStack").innerHTML= document.getElementById("stickAmount").value;

    return function cleanup() {
       
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
        <input id="stickAmount" type="number" onChange={()=>setnumberOfSticks(document.getElementById("stickAmount").value)}></input> 
        <button onClick={()=>setnumberOfSticks(document.getElementById("stickAmount").value)}>Accept</button>
        <div id="bigStack"></div>
        </main>
        </div>
        </React.Fragment>
    )
}

export default Game