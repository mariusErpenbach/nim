import React from "react";

const Rules = () => {
    return (<div id="rules">
    <div id="ruleFrame">
       <h1> Rules</h1>
    <ol>  
          <p> We play turn-based </p>
          <li>Player 1: choose the amount of sticks to play with.</li>
          <li>Player 2: choose how many sticks should be placed in the first stack.</li>
          <li>Player 1: choose how many sticks should be placed in the second stack.(except atleast 1 for the last stack)</li>
          <p> The remaining sticks are placed on top of the number 3 pile </p>
          <li>Player 2: choose an stack and take as many sticks (atleast 1) from it. </li>
          <li>Player 1: choose a remaining stack and take aswell as many sticks as you want(atleast 1)</li>
          <p>Repeat the last 2 steps - The player who is able to pick the last remaining stick on the board will win the game. </p>
      </ol>
      </div>
    </div>)
}

export default Rules;
