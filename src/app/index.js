import React from "react";
import { useSelector } from "react-redux";
import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comment from "components/Comments";
import TopCommenters from "components/TopCommenters";
import { commentSelector } from "../store/slices/comment";

function App() {
  const { comment } = useSelector(commentSelector);
  console.log("comment", comment);

  return (
    <>
      <Header />

      <CommentModal />

      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Comment comments={comment} />
        <TopCommenters comments={comment} />
      </div>
    </>
  );
}

export default App;
