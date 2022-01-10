import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";


const Game = (props) =>{

const [gameState, setgameState] = useState(0)

useEffect(() => {
//   document.getElementById("bigStack").innerHTML = numberOfSticks 

//     return function cleanup() {
     
//       };
})


    return (
        <React.Fragment>
        <div id="game">
        <header id="exitFrame">  
        <Link to="/"><i className="fas fa-times"></i></Link>
        </header>
        <div id="stackArea">
        <main>
        <div className="stacks"><p id="stackOne"></p></div>
        <div className="stacks"><p id="stackTwo"></p></div>
        <div className="stacks"><p id="stackThree"></p></div>
        </main>
        <aside><p id="bigStack"></p></aside>
        </div>
        
        
        <StackSplitter/>
        
 
        </div>
        </React.Fragment>
    )
}

export default Game