import React from "react";
import "./sidebar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="twitter__iconContainer">
        <TwitterIcon className="twitter__icon" />
      </div>

      <div className="sidebar__item">
        <div className="item__icon">
          <HomeIcon />
        </div>
        <div className="item__text">Home</div>
      </div>

      <div className="sidebar__item">
        <div className="item__icon">
          <TagIcon />
        </div>
        <div className="item__text">Explore</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <NotificationsIcon />
        </div>
        <div className="item__text">Notifications</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <EmailIcon />
        </div>
        <div className="item__text">Messages</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <BookmarkIcon />
        </div>
        <div className="item__text">Bookmark</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <ViewListIcon />
        </div>
        <div className="item__text">List</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <PersonIcon />
        </div>
        <div className="item__text">Profile</div>
      </div>
      <div className="sidebar__item">
        <div className="item__icon">
          <MoreHorizIcon />
        </div>
        <div className="item__text">More</div>
      </div>
      <button className="tweet__button">Tweet</button>

      <div className="bottom__container">
        <div className="profilePic__container">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="profile-pic"
          />
        </div>
        <div className="name__container">
          <div className="name">DHANUSHVARDAN</div>
          <div className="username">@dhanushvardan</div>
        </div>
      </div>
    </div>
  );
}
