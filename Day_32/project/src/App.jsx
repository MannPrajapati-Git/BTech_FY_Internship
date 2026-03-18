// Most Useful Events 

// button - onClick
// textBox - onChange
// form - onSubmit

// event.type - to get the type of event like click, change, submit etc.
// event.target.name - to get the name of the element that triggered the event
// event.target.value - to get the value of the element that triggered the event
// event.preventDefault() - to prevent the default action of the event (like form submission)



import React from 'react'

function App() {
   function printData(){
        alert("Data printed!");
    }

    const printDataUsingArrowFunction = () => {
        alert("Data printed using arrow function!");
    }

    function printDataArg(arg){
        alert("Data printed!" + " " + arg);
    }

  return (
    <>
      <h1>JS Event</h1>
      <h3>Button Click Events (onClick)</h3>
      Button Click Event: <button onClick={printData}>Click Me</button> <br />
      using arrow function button click event : <button onClick={() => alert("Data printed using arrow function!")}>Click Me</button> <br />
      Button Click Event separate arrow function: <button onClick={printDataUsingArrowFunction}>Click Me</button> <br />
      Button click event with argument: <button onClick={() => printDataArg("with argument!")}>Click Me</button>
      <br />
      <br /> 
      <h1>Event type, name and value example</h1>
      Button click event with event type, name and value: <button name="Button1" value="10" onClick={(event) => {
        alert("Event type: " + event.type); // click 
        alert("Event target name: " + event.target.name); // Button1
        alert("Event target value: " + event.target.value); // 10
      }}>Click Me</button>
      
      <h3>TextBox Events (onChange)</h3>
      TextBox Change Event: <input type="text" onChange={(event) => {
        console.log("Event type: " + event.type); // change
        console.log("Event target name: " + event.target.name); // textbox1
        console.log("Event target value: " + event.target.value); // value entered in the textbox
      }} name="textbox1" />
    </>
  )
}

export default App







