import react ,{useEffect} from "react";

const ComputerTurn= () => {
    useEffect(() => {
 
        computermove()


        return () => {
            console.log("computer turn cleaned up")
        }
    }, [])

const computermove = () => {
    let stacks = document.getElementsByClassName("stacks")
    let RandomNumber = (Math.floor(Math.random() * stacks.length) + 1)-1;
    let viableStacks = [];
    for (let i=0;i<stacks.length;i++){
        if(parseInt(stacks[i].innerHTML)<=0) {viableStacks.push(stacks[i].id)}
    }
    console.log(stacks.filter)
    console.log(stacks[RandomNumber])
}

    return (
        <div id="ComputerTurn">
        Computer turn
        </div>
    )
}
export default ComputerTurn