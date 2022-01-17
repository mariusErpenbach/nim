import react ,{useEffect} from "react";

const ComputerTurn= (props) => {
    useEffect(() => {
 
        computermove()


        return () => {
          winningCondition()
        }
    }, [])

const winningCondition = () =>{

    let stacks = document.getElementsByClassName("stacks")
    let emptyStacks = []
    for (let i=0;i<stacks.length;i++){
        if (stacks[i].innerHTML==="0"){
            emptyStacks.push(stacks[i])
        }
    }
    if (emptyStacks.length===3){
    console.log("COMPUTER HAS WON")}
}

const computermove = () => {
    let stacks = document.getElementsByClassName("stacks")
   
    let viableStacks = []; // filter all stacks to find stacks that are NOT empty
    for (let i=0;i<stacks.length;i++){ 
        if(parseInt(stacks[i].innerHTML)!=0) {viableStacks.push(stacks[i].id)}
    }
    let randomNumber = (Math.floor(Math.random() * viableStacks.length) + 1)-1; // create a random number based on the number of viable stacks
    let randomDraw = (Math.floor(Math.random()*100+1)-1) //random number from 1-100 
    let computerChoice = document.getElementById(viableStacks[randomNumber])
    let drawFromStack = Math.ceil((parseInt(computerChoice.innerHTML)/100)*randomDraw)
    console.log(`computers number to withdraw ${drawFromStack} from stack ${computerChoice.id}`)
    computerChoice.innerHTML = parseInt(computerChoice.innerHTML) - drawFromStack
    props.passTurn()
    
}

    return (
        <div id="ComputerTurn">
        Computer turn
        </div>
    )
}
export default ComputerTurn