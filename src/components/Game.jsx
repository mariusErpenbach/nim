import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StackSplitter from "./StackSplitter";


const Game = (props) =>{

const [numberOfSticks, setnumberOfSticks] = useState(0)

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
        
        <StackSplitter/>
        
 
        </div>
        </React.Fragment>
    )
}

export default Game