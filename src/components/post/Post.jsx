import React from "react";
import "./post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SwapCallsRoundedIcon from "@mui/icons-material/SwapCallsRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

export default function Post() {
  return (
    <div className="post">
      <div className="top__container">
        <div className="left__container">
          <img
            src="https://forums-images.oneplus.net/data/webimg/2021/01-29/601383d8b09fa.png"
            alt="profile-pic"
            className="profile__pic"
          />
        </div>

        <div className="center__container">
          <div className="top__text">
            <span className="name">OnePlus</span>
            <span className="verified">
              <VerifiedIcon className="icon" />
            </span>
            <span className="username">@OnePlus</span>
            <span className="dot">·</span>
            <span className="date">Jun 28</span>
          </div>

          <div className="post__desc">
            Alright let's settle this. Does water taste different from different
            sources/brands?
          </div>

          <div className="post__hashtags">#OnePlus10Pro</div>
        </div>

        <div className="right__container">
          <MoreHorizOutlinedIcon className="icon" />
        </div>
      </div>

      <div className="middle__container">
        <img
          src="https://pbs.twimg.com/media/FPL4bsvVUAEl5kx?format=jpg&name=small"
          alt="post-img"
        />
        <div className="post__text">
          <div className="sub__text">oneplus.com</div>
          <div className="main__text">Check out the OnePlus 10 Pro</div>
        </div>
      </div>

      <div className="bottom__container">
        <div className="comment count__container">
          <ChatBubbleOutlineRoundedIcon className="icon" />
          <span className="count">335</span>
        </div>
        <div className="retweet count__container">
          <SwapCallsRoundedIcon className="icon" />
          <span className="count">162</span>
        </div>
        <div className="like count__container">
          <FavoriteBorderRoundedIcon className="icon" />
          <span className="count">1117</span>
        </div>
        <div className="share count__container">
          <FileUploadRoundedIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
