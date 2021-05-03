import { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
  ]);
  return (
    <div className="App">
      <h1>Greeting from Temie! 📣 🎈 👍 ✌ </h1>
      <input />
      <button>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li> ✔️ {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
