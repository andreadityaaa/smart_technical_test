import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [num, setNum] = useState();
  const [numResult, setNumResult] = useState(0);
  const [numDifference, setNumDifference] = useState(0);
  function handleInput() {
    //please put your logic here
    let checkNum = num.replace(/[.,]/g, "");
    let result = checkNum.toString().split("").reverse().join("");
    while (result.charAt(0) === "0") {
      result = result.substring(1);
    }
    let difference = num - result;
    difference = Math.abs(difference);
    setNumDifference(difference);
    setNumResult(result);
    console.log(">>>", result);
    console.log("<<<", difference);
  }
  // console.log("check - num : ", num);
  return (
    <div className="App">
      <div>
        <label>Number: </label>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {numResult}</div>
      <div>Difference: {numDifference}</div>
    </div>
  );
}
