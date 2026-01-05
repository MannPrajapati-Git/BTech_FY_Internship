import { useState } from 'react';
import React from 'react';
function App() {
  const [todo, setTodo] = useState('');
  const [result, setResult] = useState([]);
  // let array = [];
  const addTodo = () => {

    localStorage.setItem('todo', JSON.stringify([...result, todo]));
    setResult([...result, todo]);
    setTodo('');
  };


  React.useEffect(() => {
    const data = localStorage.getItem('todo');
    if (data !== null) {
      setResult(JSON.parse(data));
    }
  }, []);


  const editTodo = (index) => {

    let pickTodo = result[index];
    setTodo(pickTodo);
    deleteTodo(index);
    // result.splice(index, 1);
    // localStorage.setItem("todo", JSON.stringify(result));
    // setResult([...result]);

  };

  const deleteTodo = (index) => {
    // by using empty array
    // array.push(...result);
    // array.splice(index, 1);
    // localStorage.setItem("todo", JSON.stringify(array)); 
    // setResult([...array]);

    // by using previous output
    result.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(result));
    setResult([...result]);

  };


  return (
    <>
      <div>
        <h1>Todo List Using MapFunction And LocalStorage</h1>
        <input
          type="text"
          value={todo}
          placeholder="Add New Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="button" value="Add Todo" onClick={addTodo} />

        {result.map((item, index) => (
          <div key={index}>
            <li>{item} <input type='button' value="Edit Todo" onClick={()=>editTodo(index)} /><input type='button' value="Delete Todo" onClick={() => deleteTodo(index)} /> </li>
          </div>
        ))}

      </div> </>
  );
}
export default App;
