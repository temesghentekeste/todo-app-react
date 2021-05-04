import { useState, useRef } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
  ]);

  const [input, setInput] = useState('');
  const inputRef = useRef();

  const addTodo = (e) => {
    setTodos([...todos, input]);
    setInput('');
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Greeting from Temie! 📣 🎈 👍 ✌ </h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button onClick={addTodo}>Add todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li> ✔️ {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
