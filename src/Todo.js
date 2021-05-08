import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase'
const Todo = ({ todo }) => {

  const handleDelete = (id) => {
    console.log('Delete', id, typeof id);
    db.collection('todos').doc(id).delete();
    const todoRef = db.collection('todos').doc(id);
    console.log(todoRef);
  }

  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText
          inset
          color="primary"
          primary={todo.todo}
          secondary={todo.inprogress ? 'In Progress' : 'Comleted'}
        />
        <Button>Done ⏲ </Button>
        <Button
          onClick={(e) => handleDelete(todo.id)}
          vaiant="contained"
          color="secondary"
        >
          DELETE 🗑 
        </Button>
      </ListItem>
    </List>
  );
};

export default Todo;
