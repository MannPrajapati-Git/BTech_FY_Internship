import { useState } from 'react'
import './App.css'

function App() {

  const [no1, setNo1] = useState("");
  const [no2, setNo2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  function calculate(op) {
    let n1 = parseInt(no1);
    let n2 = parseInt(no2);

    if (op === "add") {
      setResult(n1 + n2);
    }
    else if (op === "subtract") {
      setResult(n1 - n2);
    }
  }

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    <>
      <h1>Calculator</h1>

      No1 :
      <input type="text" onChange={(e) => setNo1(e.target.value)} />
      <br /><br />

      No2 :
      <input type="text" onChange={(e) => setNo2(e.target.value)} />
      <br /><br />

      <input
        type="radio"
        name="operation"
        value="add"
        checked={operation === "add"}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      /> Add
      <br />

      <input
        type="radio"
        name="operation"
        value="subtract"
        checked={operation === "subtract"}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      /> Subtract
      <br /><br />

      <select
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
      </select>

      <br /><br />

      <h1>Result : {result}</h1>
    </>
  )
}

export default App
