import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Game = (props) =>{

const [numberOfSticks, setnumberOfSticks] = useState(0)

useEffect(() => {
//   document.getElementById("bigStack").innerHTML = numberOfSticks 

//     return function cleanup() {
     
//       };
})

const splitOne = (button) =>{
    let stack = document.getElementById("stackOne")
    let bigStack = document.getElementById("bigStack")
    // subtract 40% from the bigStack to the first stack (first computer move)
    stack.innerHTML = Math.floor((numberOfSticks/100)*40)
    setnumberOfSticks(numberOfSticks-Math.floor((numberOfSticks/100)*40))
    bigStack.innerHTML = numberOfSticks-Math.floor((numberOfSticks/100)*40)
    button.innerHTML = "sticks to staple two"
}
const splitTwo = (button, userValue) =>{
    let stackTwo = document.getElementById("stackTwo")
    let stackThree = document.getElementById("stackThree")
    let bigStack = document.getElementById("bigStack")
    // let user split the bigStack one more time (but 1 stick needs to be left in the bigstack for the third stack)
    stackTwo.innerHTML = userValue
    bigStack.innerHTML -= userValue;
    stackThree.innerHTML = bigStack.innerHTML;
    bigStack.innerHTML = "";
    setnumberOfSticks(numberOfSticks-userValue)

    
}



const lockStack = () =>{
    let stackOne = document.getElementById("stackOne")
    let stackTwo = document.getElementById("stackTwo")


    let inputButton = document.getElementById("inputButton")
    var inputfield = document.getElementById("stickAmount")
     // clear input
        inputfield.value= ""
    // checks if number input was correctly by (= atleast 3 sticks for 1 per stack each)
    if (stackOne.innerHTML<1){
        return splitOne(inputButton)
    }
    else if (stackTwo.innerHTML<1){
        return splitTwo(inputButton, numberOfSticks)
    }
}

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
        <input id="stickAmount" type="number" onChange={()=>{setnumberOfSticks(document.getElementById("stickAmount").value)}}></input> 
        <button id="inputButton" onClick={lockStack}>lock stack</button>
        <div id="bigStack"></div>
        <div id="stackOne">0</div>
        <div id="stackTwo">0</div>
        <div id="stackThree">0</div>
        </main>
        </div>
        </React.Fragment>
    )
}

export default Game