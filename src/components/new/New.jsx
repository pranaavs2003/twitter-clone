import React from "react";
import "./new.scss";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

export default function New() {
  return(
  <div className="new">

    <div className="top__items">
      <div className="home__text">Home</div>
      <div className="star__icon"><StarBorderIcon /></div>
    </div>

    <div className="middle__items">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
      <input type="text" id="tweet__content" className="tweet__input" placeholder="What's Happenning?"/>
    </div>

    <div className="bottom__items">
      <div className="icons__list">
        <CollectionsOutlinedIcon />
        <GifOutlinedIcon />
        <QueryStatsOutlinedIcon />
        <EmojiEmotionsOutlinedIcon />
        <CalendarMonthOutlinedIcon />
        <PinDropOutlinedIcon />
      </div>
      <button className="tweet__button">Tweet</button>
    </div>

  </div>
  );
}
