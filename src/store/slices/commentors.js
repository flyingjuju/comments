import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentors: {},
};

const commentorSlice = createSlice({
  name: "commentor",
  initialState,
  reducers: {
    getCommentors(state, { payload }) {
      const comments = payload;
      for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        state.commentors[comment.name] =
          state.commentors[comment.name] + 1 || 1;
      }
    },
    updateCommentor(state, { payload }) {
      const { name } = payload;
      state.commentors[name] = state.commentors[name] + 1 || 1;
    },
  },
});

export const commentorsSelector = (state) => state.commentors;

export const { getCommentors, updateCommentor } = commentorSlice.actions;

export default commentorSlice.reducer;
