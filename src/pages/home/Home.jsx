import React from "react";
import "./home.scss";
//import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import Trending from "../../components/trending/Trending";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Main />
      <Trending />
    </div>
  );
}
