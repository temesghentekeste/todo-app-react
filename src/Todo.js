import { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: 'absolute',
    width: 400,
    margin: 'auto',
    marginTop: '4rem',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = ({ todo }) => {
  const [open, setOpen] = useState();
  const classes = useStyles();
  const [input, setInput] = useState(todo.todo);

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = (todo) => {
    const todosRef = db.collection('todos').doc(todo.id);

    // Set the 'capital' field of the city
    todosRef.update({ todo: input});
    setOpen(false);
  };
  const handleDelete = (id) => {
    db.collection('todos').doc(id).delete();
    // const todoRef = db.collection('todos').doc(id);
  };

  const handleInProgress = (todo) => {
    const todosRef = db.collection('todos').doc(todo.id);

    // Set the 'capital' field of the city
    todosRef.update({ inprogress: !todo.inprogress });
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Updating Todo</h1>
          <FormControl>
            <InputLabel>✅ Write Something...</InputLabel>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              disabled={!input}
              onClick={() => updateTodo(todo)}
              variant="contained"
              color="primary"
            >
              Update todo
            </Button>
          <Button onClick={(e) => setOpen(false)}>Close</Button>
          </FormControl>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem button>
          <ListItemText
            inset
            primary={todo.todo}
            secondary={todo.inprogress ? 'In Progress' : 'Comleted'}
          />
          <Button color="primary" onClick={(e) => setOpen(true)}>
            Edit
          </Button>
          <Button color="primary" onClick={() => handleInProgress(todo)}>
            Done ⏲{' '}
          </Button>
          <Button
            onClick={(e) => handleDelete(todo.id)}
            vaiant="contained"
            color="secondary"
          >
            <DeleteForeverIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default Todo;
