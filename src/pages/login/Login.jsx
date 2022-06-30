import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="left_box">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="hero_img"
          className="img"
        />
        <img
          src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
          alt="twitter_logo"
          className="icon"
        />
      </div>
      <div className="right_box">
        <div className="left_content">
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
            alt="twitter_logo"
            className="icon"
          />
          <div className="main_text">#Happening now</div>
          <div className="sub_text">Sign In</div>
          <div className="input_fields">
            <input
              type="email"
              name="email"
              className="input_username"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="input_username"
              placeholder="Password"
            />
          </div>
          <div className="bottom_box">
            <div className="text">Don't have an account?</div>
            <button className="sign_in">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
