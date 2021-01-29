import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

import { create } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {/* <p>Add Comments</p> */}
      <form>
        <label>name</label>
        <input id="name"></input>
        <label>comment</label>
        <textarea id="comment"></textarea>
        <button onClick={(e) => addComment(e)}>submit</button>
      </form>
    </Modal>
  );
};

export default CommentModal;
