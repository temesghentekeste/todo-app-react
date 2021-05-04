import { useState, useRef } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
  ]);

  const [input, setInput] = useState('');
  const inputRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
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
        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
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
