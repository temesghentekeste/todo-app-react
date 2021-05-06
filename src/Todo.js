import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ text }) => {
  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText inset primary={text} secondary="Dummy Deadline ⏲ " />
      </ListItem>
    </List>
  );
};

export default Todo;
