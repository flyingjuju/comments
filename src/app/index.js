import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comment from "components/Comments";
import TopCommenters from "components/TopCommenters";
import { commentSelector, fetchRandomComments } from "../store/slices/comment";
import { commentorsSelector, getCommentors } from "../store/slices/commentors";

function App() {
  const dispatch = useDispatch();
  const { comments, loading, hasErrors } = useSelector(commentSelector);
  const { commentors } = useSelector(commentorsSelector);

  //fetch api data
  useEffect(() => {
    dispatch(fetchRandomComments());
  }, [dispatch]);

  //handle loading data
  const renderComments = () => {
    if (loading) return <p>Loading comments...</p>;
    if (hasErrors) return <p>Cannot display comments...</p>;
    // get commentor object based on comments list
    if (comments && Object.keys(commentors).length === 0) {
      dispatch(getCommentors(comments));
    }

    return (
      <div className="App-header">
        <Comment comments={comments} />
        <TopCommenters commentors={commentors} />
      </div>
    );
  };

  return (
    <>
      <Header />
      <CommentModal />
      {renderComments()}
    </>
  );
}

export default App;
