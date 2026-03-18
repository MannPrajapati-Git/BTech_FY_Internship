// Most Useful Events 

// button - onClick
// textBox - onChange
// form - onSubmit

// event.type - to get the type of event like click, change, submit etc.
// event.target.name - to get the name of the element that triggered the event
// event.target.value - to get the value of the element that triggered the event
// event.preventDefault() - to prevent the default action of the event (like form submission)


function JS_Event() {
    function printData(){
        alert("Data printed!");
    }
    return (
        <>
        <h1>JS Event</h1>
        Button Click Event: <button onClick="printData()">Click Me</button>
        </>
    )
}
export default JS_Event;