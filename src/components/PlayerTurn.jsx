import react, { useState, useEffect } from "react";

const PlayerTurn = (props) => {
  const [playerInput, setplayerInput] = useState("");

  useEffect(() => {
    console.log("playerTurn effect");
    let stacks = document.getElementsByClassName("stacks");
    stacks[0].onclick = highlighter;
    stacks[1].onclick = highlighter;
    stacks[2].onclick = highlighter;

    return () => {};
  }, []);

  const highlighter = (e) => {
    e.preventDefault();
    // reset old highlights
    let stacks = document.getElementsByClassName("stacks");
    for (let i=0;i<stacks.length;i++){stacks[i].style.backgroundColor="brown"}
    let clickedStack = document.getElementById(e.target.id);
    console.log(clickedStack);
    clickedStack.style.backgroundColor = "orange";
   
  };

  const sendTurn = () => {
    var stacks = document.getElementsByClassName("stacks");
    var playerInput = document.getElementById("playerturnInput").value;
    console.log(playerInput);
    console.log(stacks);
    for (let i = 0; i < stacks.length; i++) {
      if (stacks[i].style.backgroundColor === "orange") {
        stacks[i].innerHTML = parseInt(stacks[i].innerHTML) - playerInput;
        if (parseInt(stacks[i].innerHTML) < 0) {
          stacks[i].innerHTML = 0;
        }
        stacks[i].style.backgroundColor = "";
        return props.passTurn();
      }
    }
  };

  return (
    <div id="PlayerTurn">
      <p>Your Turn</p>
      <p> click the staple you want to withdraw from</p>
      <input id="playerturnInput" type="number"></input>
      <button onClick={sendTurn}>send</button>
    </div>
  );
};
export default PlayerTurn;
