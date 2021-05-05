import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const Todo = ({ text }) => {
  return (
    <List>
      <ListItem button>
        <ListItemText inset primary="Todo..." secondary={text} />
      </ListItem>
    </List>
  );
};

export default Todo;
