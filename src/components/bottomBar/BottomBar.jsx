import React from "react";
import "./bottomBar.scss";

export default function BottomBar() {
  return (
  <div className="bottomBar">
    <div className="start__container"></div>
    <div className="text__container">
        <div className="main__text">Don’t miss what’s happening</div>
        <div className="sub__text">People on Twitter are the first to know.</div>
    </div>
    <div className="button__container">
        <button className="button__login">Log in</button>
        <button className="button__signin">Sign up</button>
    </div>
  </div>
  );
}
