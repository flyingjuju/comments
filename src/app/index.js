import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comment from "components/Comments";
import TopCommenters from "components/TopCommenters";
import { commentSelector, fetchRandomComments } from "../store/slices/comment";
import Divider from "@material-ui/core/Divider";

function App() {
  const dispatch = useDispatch();
  const { comment, loading, hasErrors } = useSelector(commentSelector);
  console.log("comment at app.js", comment);

  useEffect(() => {
    dispatch(fetchRandomComments());
  }, [dispatch]);

  const renderComments = () => {
    if (loading) return <p>Loading comments...</p>;
    if (hasErrors) return <p>Cannot display comments...</p>;

    return (
      <div className="App-header">
        <Comment comments={comment} />
        <Divider variant="middle" />
        <TopCommenters comments={comment} />
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
