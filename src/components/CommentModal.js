import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

import { create } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5),
  },
  block: {
    display: "block",
    margin: theme.spacing(2),
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  const addComment = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    console.log(name, comment);
    dispatch(create({ name, comment }));
    handleClose();
  };
  return (
    // <div className={classes.root}>

    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <TextField required id="name" label="Name" className={classes.block} />
        <TextField
          id="comment"
          label="Comment"
          multiline
          className={classes.block}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.block}
          onClick={(e) => addComment(e)}
        >
          Send
        </Button>
      </div>

      {/* <form>
          <label>name</label>
          <input id="name"></input>
          <label>comment</label>
          <textarea id="comment"></textarea>
          <button onClick={(e) => addComment(e)}>submit</button>
        </form> */}
    </Modal>
    // </div>
  );
};

export default CommentModal;
