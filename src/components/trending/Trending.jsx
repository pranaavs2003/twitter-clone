import React from "react";
import "./trending.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function Trending() {
  return (
    <div className="trending">

      <div className="trending_searchbar">
        <SearchIcon className="icon" />
        <input
          type="text"
          className="searchbar_input"
          placeholder=" Search twitter"
        ></input>
      </div>

      <div className="trending_feedbar">
        <div className="boxtitle">What's happening</div>
        <div className="trending_feedbox">
          <div className="trending_text">
            <div className="trending_msg_title">Tennis · LIVE</div>
            <div className="trending_msg">
              All the action from Wimbledon 2022
            </div>
          </div>
          <div className="trending_image">
            <img
              src="https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2560,h_1707,c_scale/v1588089203/action-athlete-ball-1432039-scaled.jpg"
              className="img1" alt='THUMBNAIL'
            ></img>
          </div>
        </div>
        <div className="trending_feedbox">
          <div className="trending_text">
            <div className="trending_msg_title">Business & finance · LIVE</div>
            <div className="trending_msg">
              Mukesh Ambani resigns as Reliance Jio director
            </div>
          </div>
          <div className="trending_image">
            <img
              src="http://www.logotaglines.com/wp-content/uploads/2016/08/reliance-jio-logo-red.jpg"
              className="img1" alt='THUMBNAIL'
            ></img>
          </div>
        </div>
        <div className="trending_feedbox">
          <div className="trending_text">
            <div className="trending_msg_title">Technology · Trending</div>
            <div className="trending_msg">MacBook Pro</div>
          </div>
          <div className="trending_image">
            <img
              src="https://cdn.vox-cdn.com/thumbor/vGTTyiMMUHIHLs0FjoF0z99m6_E=/0x0:2040x1360/1200x800/filters:focal(895x304:1221x630)/cdn.vox-cdn.com/uploads/chorus_image/image/68592461/vpavic_4291_20201113_0366.0.0.jpg"
              className="img1" alt='THUMBNAIL'
            ></img>
          </div>
        </div>
        <div className="trending_feedbox">
          <div className="trending_text">
            <div className="trending_msg_title">Technology · Trending</div>
            <div className="trending_msg">Android 12</div>
          </div>
          <div className="trending_image">
            <img
              src="https://fscl01.fonpit.de/userfiles/7711048/image/Android_12_Smartphones.jpg"
              className="img1" alt='THUMBNAIL'
            ></img>
          </div>
        </div>
        <div className="trending_feedbox">
          <div className="trending_text">
            <div className="trending_msg_title">Entertainment · Trending</div>
            <div className="trending_msg">
              #Suriya Trending with #VaadiVaasal
            </div>
          </div>
          <div className="trending_image">
            <img
              src="https://static.toiimg.com/photo/msid-62403853/62403853.jpg"
              className="img1" alt='THUMBNAIL'
            ></img>
          </div>
        </div>
      </div>

    </div>
  );
}
