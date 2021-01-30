import { createSlice } from "@reduxjs/toolkit";
// import mock comments
// import { mockComments } from "../api";
// use axios to have api call
import axios from "axios";

// switch from local mock data to api data, add loading and error to control loading
const initialState = {
  // comment: mockComments,
  loading: false,
  hasErrors: false,
  comment: [],
};

//control rendering api data, and create a new comment
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getComment: (state) => {
      state.loading = true;
    },
    getCommentSuccess: (state, { payload }) => {
      state.comment = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCommentFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    create(state, { payload }) {
      const { name, body } = payload;
      state.comment.push({ name, body });
    },
  },
});

export const commentSelector = (state) => state.comment;

export const {
  create,
  getComment,
  getCommentSuccess,
  getCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;

// fetch 20 api comments, async-await to control api call
export const fetchRandomComments = () => {
  return async (dispath) => {
    dispath(getComment());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      // console.log("api data", response.data);
      const { data } = await response;
      dispath(getCommentSuccess(data.slice(0, 20)));
    } catch (err) {
      console.log("api error", err);
      dispath(getCommentFailure());
    }
  };
};
