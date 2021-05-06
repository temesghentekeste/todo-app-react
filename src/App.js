import { useState, useRef } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

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
      <h1>Greeting from Temie! 🚀 ✌ 📣 👍 🎈  </h1>
      <FormControl>
        <InputLabel>✅  Write Something...</InputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </FormControl>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
