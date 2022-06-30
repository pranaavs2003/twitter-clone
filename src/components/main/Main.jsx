import React from "react";
import "./main.scss";
import Post from "../post/Post";
import New from "../new/New";

export default function Main() {
  return (
    <div className="main">
      <New />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
