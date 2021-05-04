import { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (e) => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Greeting from Temie! 📣 🎈 👍 ✌ </h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li> ✔️ {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
