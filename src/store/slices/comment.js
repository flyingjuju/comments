import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { mockComments } from "../api";
import axios from "axios";

const initialState = {
  // comment: mockComments,
  loading: false,
  hasErrors: false,
  comment: [],
};

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
      console.log("here", payload, "state", state);
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

export const fetchRandomComments = () => {
  return async (dispath) => {
    dispath(getComment());

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log("api data", response.data);
      const { data } = await response;
      dispath(getCommentSuccess(data.slice(0, 10)));
    } catch (err) {
      console.log("api error", err);
      dispath(getCommentFailure());
    }
  };
};
