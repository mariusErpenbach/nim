import react,{useState,useEffect} from "react"

const StackSplitter = (props) => {

    const [numberOfSticks, setnumberOfSticks] = useState(0)
    const [visible, setvisible] = useState(true)
    

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
      return setvisible(0)
        
    }
    
    
    
    const lockStack = () =>{
        let stackOne = document.getElementById("stackOne")
        let stackTwo = document.getElementById("stackTwo")
        let inputButton = document.getElementById("inputButton")
        var inputfield = document.getElementById("stickAmount")
        let bigStack = document.getElementById("bigStack")
    
        if (stackOne.innerHTML<1){ // if stackOne is filled already -> skip splitOne
        // clear input
            inputfield.value= ""
            return splitOne(inputButton)
        }
        else if (stackTwo.innerHTML<1){ 
            // check if input was low enough to be splittet 2 times afterwards
            if (parseInt(bigStack.innerHTML)<=numberOfSticks){
                return  alert("to much input")
            }     
            else{
            inputfield.value= ""
            return splitTwo(inputButton, numberOfSticks)}
        }
    }


return visible === true? (
<div className="stackSplitter">

<p>choose number of Sticks</p>
<input id="stickAmount" type="number" onChange={()=>{setnumberOfSticks(document.getElementById("stickAmount").value)}}></input> 
<button id="inputButton" onClick={lockStack}>lock stack</button>
 
        
</div>)
:<div/>
}

export default StackSplitter