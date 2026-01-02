import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState('');
  const [result, setResult] = useState([]);
  const addTodo = () => {
    setResult([...result, todo]);
    setTodo('');
  };
  return (
    <>
      <h1>Todo List Using MapFunction</h1>
      <input
        type="text"
        placeholder="Add New Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input type="button" value="Add Todo" onClick={addTodo} />
        {result.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
          </div>
        ))}
    </>
  );
}
export default App;
