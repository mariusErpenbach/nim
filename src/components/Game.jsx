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
    let stack = document.getElementById("stackTwo")
    stack.innerHTML = userValue
    setnumberOfSticks(numberOfSticks-userValue)
    button.innerHTML ="sticks to staple three"
    splitThree(button)
}

const splitThree = (button) =>{
    let stack = document.getElementById("stackThree")
    stack.innerHTML = numberOfSticks
    document.getElementById("bigStack").innerHTML=""
}


const lockStack = () =>{
    let stackOne = document.getElementById("stackOne")
    let stackTwo = document.getElementById("stackTwo")
    let stackThree = document.getElementById("stackThree")

    let inputButton = document.getElementById("inputButton")
    var inputfield = document.getElementById("stickAmount")
     // clear input
        inputfield.value= ""
    // checks if number input was correctly by (= atleast 3 sticks for 1 per stack each)
    if (numberOfSticks > 2){
      
        if(stackOne.innerHTML < 2){
        return splitOne(inputButton)
        }
        else if(stackTwo.innerHTML < 2){
            return splitTwo(inputButton, numberOfSticks)
        }
        else if(stackThree.innerHTML < 2){
            return splitThree(inputButton)
        }
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