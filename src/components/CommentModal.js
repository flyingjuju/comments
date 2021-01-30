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
import { updateCommentor } from "store/slices/commentors";

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
    padding: theme.spacing(5, 7),
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

  // use native form validation by adding required attribute to inputs
  // when inputs are valid, add new comment entry to list
  // letter shall be sensitive in this case
  const addComment = (e) => {
    const name = document.getElementById("name").value.trim();
    const body = document.getElementById("comment").value;
    if (name.length > 0 && body.length > 0) {
      dispatch(create({ name, body }));
      dispatch(updateCommentor({ name }));
      handleClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form className={classes.paper}>
        <TextField required id="name" label="Name" className={classes.block} />
        <TextField
          multiline
          fullWidth
          required
          id="comment"
          label="Comment"
          className={classes.block}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.block}
          onClick={(e) => addComment(e)}
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default CommentModal;
