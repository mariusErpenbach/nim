import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
// import PhaseOne from "./PhaseOne";
import PhaseStart from "./PhaseStart";

const Game = (props) =>{
const [numberOfSticks, setNumberOfSticks] = useState("")
function getNumberOfSticks  (nos) {
 setNumberOfSticks(nos)
}

useEffect(() => {
    console.log("change happened")
  });


    return (
        <React.Fragment>
        <div id="game">
        <div id="exitFrame">  
        <Link to="/">
        <div id="exitGame" ><i className="fas fa-times"></i></div>
        </Link>
        </div>
      
        <main>
        <div><p>chose number of Sticks</p>
        <input type="number" onChange={console.log(this)}></input> 
        <div id="testing"></div>
        </div>

        </main>
        </div>
        </React.Fragment>
    )
}

export default Game