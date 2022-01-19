import react, { useState, useEffect } from "react";

const StackSplitter = (props) => {
  const [numberOfSticks, setnumberOfSticks] = useState(0);
  const [visible, setvisible] = useState(true);

  const splitOne = (button) => {
    let stack = document.getElementById("stackOne");
    let bigStack = document.getElementById("bigStack");
    // subtract 40% from the bigStack to the first stack (first computer move)
    let randomNumber = Math.floor(Math.random() * (75 - 5) + 5);
    if(randomNumber <1){randomNumber =1}
    stack.innerHTML = Math.floor((numberOfSticks / 100) * randomNumber);
    setnumberOfSticks(
      numberOfSticks - Math.floor((numberOfSticks / 100) * randomNumber)
    );
    bigStack.innerHTML =
      numberOfSticks - Math.floor((numberOfSticks / 100) * randomNumber);
    button.innerHTML = "sticks to staple two";
  };

  const splitTwo = (userValue) => {
    let stackTwo = document.getElementById("stackTwo");
    let stackThree = document.getElementById("stackThree");
    let bigStack = document.getElementById("bigStack");
    // let user split the bigStack one more time (but 1 stick needs to be left in the bigstack for the third stack)
    stackTwo.innerHTML = userValue;
    bigStack.innerHTML -= userValue;
    // split the remaining sticks from bigStack to stackThree
    stackThree.innerHTML = bigStack.innerHTML;
    bigStack.innerHTML = "";
    // update states
    setnumberOfSticks(numberOfSticks - userValue);
  
    props.finisher();
  };

  const lockStack = () => {
    let stackOne = document.getElementById("stackOne");
    let stackTwo = document.getElementById("stackTwo");
    let inputButton = document.getElementById("splitButton");
    var inputfield = document.getElementById("stickAmount");
    let bigStack = document.getElementById("bigStack");
    if (inputfield.value>0){
    if (stackOne.innerHTML < 1  ) {
    if (inputfield.value <=2){return alert ("send atleast 3 sticks to the big staple")}
      // if stackOne is filled already -> skip splitOne
      // clear input
      inputfield.value = "";
      return splitOne(inputButton);
    } else if (stackTwo.innerHTML < 1) {
      // check if input was low enough to split once more after the user split
      if (parseInt(bigStack.innerHTML) <= numberOfSticks) {
        return alert("to much input");
      } else {
        inputfield.value = "";
        return splitTwo(numberOfSticks);
      }
    }
  }
  else return alert("please enter a value")
};

  return (
    <div id="stackSplitter">
      <input
        id="stickAmount"
        type="number"
        onChange={() => {
          setnumberOfSticks(document.getElementById("stickAmount").value);
        }}
      ></input>
      <button  id="splitButton" className="inputButton" onClick={lockStack}>
        send to big stack
      </button>
    </div>
  );
};

export default StackSplitter;
