import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
const Todo = ({ todo }) => {
  const handleDelete = (id) => {
    db.collection('todos').doc(id).delete();
    const todoRef = db.collection('todos').doc(id);
  };

  const handleInProgress = (todo) => {
    const todosRef = db.collection('todos').doc(todo.id);

    // Set the 'capital' field of the city
    todosRef.update({ inprogress: !todo.inprogress });
  };

  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText
          inset
          primary={todo.todo}
          secondary={todo.inprogress ? 'In Progress' : 'Comleted'}
        />
        <Button color="primary" onClick={() => handleInProgress(todo)}>
          Done ⏲{' '}
        </Button>
        <Button
          onClick={(e) => handleDelete(todo.id)}
          vaiant="contained"
          color="secondary"
        >
           <DeleteForeverIcon/>
        </Button>
      </ListItem>
    </List>
  );
};

export default Todo;
