import react ,{useState,useEffect} from "react";

const PlayerTurn = (props) => {

const [playerInput, setplayerInput] = useState("")


useEffect(() => {
    
    console.log("playerTurn effect")
    let stacks = document.getElementsByClassName("stacks")
    stacks[0].onclick = highlighter
    stacks[1].onclick = highlighter
    stacks[2].onclick = highlighter
    
    return () => {
     console.log("playerturn-cleanup")   
    }
}, [])

const highlighter = (e) => {
    e.preventDefault()
    let clickedStack = document.getElementById(e.target.id)
    console.log(clickedStack)
    clickedStack.style.backgroundColor ="orange";
    let stacks = document.getElementsByClassName("stacks")
    stacks[0].onclick = ""
    stacks[1].onclick = ""
    stacks[2].onclick = ""
 
    }

 const sendTurn = () => {
     
     var stacks=document.getElementsByClassName("stacks")
     var playerInput = document.getElementById("playerturnInput").value;
     console.log(playerInput)
     console.log(stacks)
    for(let i=0;i<stacks.length;i++){
        if(stacks[i].style.backgroundColor="orange"){
            return(stacks[i].innerHTML= parseInt(stacks[i].innerHTML)-playerInput)
        }
    }
 }

    return (
        <div id="PlayerTurn">
        <p>Your Turn</p>
        <p> click the staple you want to withdraw from</p>
        <input id="playerturnInput" type="number"></input>
        <button onClick={sendTurn}>send</button>
        </div>
    )
}
export default PlayerTurn