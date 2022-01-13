import react,{useState,useEffect} from "react"

const StackSplitter = (props) => {

    const [numberOfSticks, setnumberOfSticks] = useState(props.stickAmount)
    const [visible, setvisible] = useState(true)
    

    const splitOne = (button) =>{
        let stack = document.getElementById("stackOne")
        let bigStack = document.getElementById("bigStack")
        // subtract 40% from the bigStack to the first stack (first computer move)
        let randomNumber = Math.floor(Math.random()*(75-1)+1);
        console.log(randomNumber)
        stack.innerHTML = Math.floor((numberOfSticks/100)*randomNumber)
        setnumberOfSticks(numberOfSticks-Math.floor((numberOfSticks/100)*randomNumber))
        bigStack.innerHTML = numberOfSticks-Math.floor((numberOfSticks/100)*randomNumber)
        button.innerHTML = "sticks to staple two"
        props.onChange("hi")
    }
    const splitTwo = (userValue) =>{
        let stackTwo = document.getElementById("stackTwo")
        let stackThree = document.getElementById("stackThree")
        let bigStack = document.getElementById("bigStack")
        // let user split the bigStack one more time (but 1 stick needs to be left in the bigstack for the third stack)
        stackTwo.innerHTML = userValue
        bigStack.innerHTML -= userValue;
        // split the remaining sticks from bigStack to stackThree
        stackThree.innerHTML = bigStack.innerHTML;
        bigStack.innerHTML = "";
        // update states
        setnumberOfSticks(numberOfSticks-userValue)
        // setvisible(0)
        
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
            // check if input was low enough to be splittet 2 more times
            if (parseInt(bigStack.innerHTML)<=numberOfSticks){
                return  alert("to much input")
            }     
            else{
            inputfield.value= ""
            return splitTwo(numberOfSticks)}
        }
    }


return  (
<div className="stackSplitter">

<div id="stackArea">
        <main>
        <div className="stacks"><p id="stackOne"></p></div>
        <div className="stacks"><p id="stackTwo"></p></div>
        <div className="stacks"><p id="stackThree"></p></div>
        </main>
        <aside><p id="bigStack"></p></aside>
        </div>
<input id="stickAmount" type="number" onChange={()=>{setnumberOfSticks(document.getElementById("stickAmount").value)}}></input> 
<button id="inputButton" onClick={lockStack}>lock stack</button>
 
        
</div>)

}

export default StackSplitter