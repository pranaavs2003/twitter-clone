import React from "react";
import "./profileContent.scss";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import VerifiedIcon from '@mui/icons-material/Verified';
import Post from "../post/Post";

export default function ProfileContent() {
  return(
    <div className="profileContent">
        <div className="user__info">
            <div className="top__content">

                <div className="top__bar">
                    <div className="left">
                        <KeyboardBackspaceIcon />
                    </div>
                    <div className="right">
                        <div className="main__text">
                            <span>OnePlus</span>
                            <VerifiedIcon />
                        </div>
                        <div className="sub__text">16.6K Tweets</div>
                    </div>
                </div>

                <div className="image__bar">
                    <img src="https://pbs.twimg.com/profile_banners/2196922086/1648126309/1080x360" alt="main_image" className="banner__img" />
                    <img src="https://forums-images.oneplus.net/data/webimg/2021/01-29/601383d8b09fa.png"
                    alt="profile-pic" className="profile__img"/>
                </div> 

            </div>

            <div className="bottom__content">

                <div className="top__items">
                    <button>Follow</button>
                </div>

                <div className="bottom__items">
                    <div className="title">
                        <span>OnePlus</span>
                        <VerifiedIcon />
                    </div>
                    <div className="username">
                        @oneplus
                    </div>
                    <div className="desc">
                        Discover the #OnePlus10Pro co-developed with @Hasselblad. For help with your order, please DM @OnePlus_Support
                    </div>
                    <div className="stats">
                        <span className="following">
                            <span className="count">25</span>
                            <span className="text">Following</span>
                        </span>
                        <span className="following">
                            <span className="count">1.2m</span>
                            <span className="text">Followers</span>
                        </span>
                    </div>
                </div>

            </div>
        
        </div>

        <div className="user__posts">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    </div>
  );
}
