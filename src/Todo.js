import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase'
const Todo = ({ todo }) => {
  console.log(todo)

  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText inset primary={todo.todo} secondary="Dummy Deadline ⏲ " />
        <Button onClick={ e => db.collection('todos').doc(todo.id).delete()}>DELETE</Button>
      </ListItem>
    </List>
  );
};

export default Todo;
