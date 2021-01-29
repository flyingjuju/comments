import { createSlice, createSelector } from "@reduxjs/toolkit";
import { mockComments } from "../api";

const initialState = {
  // loading: false,
  // hasErrors: false,
  comment: mockComments,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // getData: state => {
    //   state.loading = true
    // },
    // getDataSuccess: (state, { payload }) => {
    //   state.data = payload
    //   state.loading = false
    //   state.hasErrors = false
    // },
    // getDataFailure: state => {
    //   state.loading = false
    //   state.hasErrors = true
    // },
    // create: {
    //   reducer(state, {payload}) {
    //       console.log('heer',payload,'state',state)
    //       const {name, comment} = payload;
    //       state.push({name,comment})
    //     }

    // }
    create(state, { payload }) {
      console.log("here", payload, "state", state);
      const { name, comment } = payload;
      state.comment.push({ name, comment });
    },
  },
});

// const getSlice = (state) => state[name] || {};

// export const getViewCommentsModalOpen = createSelector(
//   getSlice,
//   (slice) => slice.commentsModalOpen
// );
export const commentSelector = (state) => state.comment;
export const { create } = commentSlice.actions;
// export const { openCommentsModal, closeCommentsModal } = viewSlice.actions;
export default commentSlice.reducer;
