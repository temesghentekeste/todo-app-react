import { useState, useRef, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase'
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({id: doc.data().id, todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('')
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Greeting from Temie! 🚀 ✌ 📣 👍 🎈 </h1>
      <FormControl>
        <InputLabel>✅ Write Something...</InputLabel>
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
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
