import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileContent from "../../components/profileContent/ProfileContent";
import Trending from "../../components/trending/Trending";
import BottomBar from "../../components/bottomBar/BottomBar";

export default function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <ProfileContent />
      <Trending />
      <BottomBar />
    </div>
  );
}
