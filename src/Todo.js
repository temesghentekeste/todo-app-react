import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const Todo = ({ text }) => {
  return (
    <List>
      <ListItem button>
        <ListItemText inset primary={text} secondary="Dummy Deadline ⏲ " />
      </ListItem>
    </List>
  );
};

export default Todo;
