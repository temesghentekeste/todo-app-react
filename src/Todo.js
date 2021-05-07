import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ todo }) => {

  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText inset primary={todo.todo} secondary="Dummy Deadline ⏲ " />
        <Button>DELETE</Button>
      </ListItem>
    </List>
  );
};

export default Todo;
