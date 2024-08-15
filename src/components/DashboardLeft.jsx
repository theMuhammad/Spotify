import React, { useEffect, useState } from "react";
import {
  createPlaylist,
  home,
  libarary,
  likedsong,
  search,
} from "../assets/imgs";
import "../scss/DashboardLeft.scss";
import { useNavigate } from "react-router-dom";

function DashboardLeft() {
  const nav = useNavigate();

  const [acitive1, setActive1] = useState("");
  const [acitive2, setActive2] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "/playlist") {
      setActive1("active");
      setActive2("");
    } else if (window.location.pathname === "/like") {
      setActive1("");
      setActive2("active");
    }
  }, [window.location.pathname]);
  return (
    <div className="dashboard_Left">
      <div className="dashbord_activs">
        <div className="home" onClick={() => nav("/")}>
          <img src={home} alt="" />
          <p className={acitive1}>Home</p>
        </div>
        <div className="search">
          <img src={search} alt="" />
          <p>Search</p>
        </div>
        <div className="library">
          <img src={libarary} alt="" />
          <p>Your Library</p>
        </div>
      </div>
      <div className="dashbord_likes">
        <div className="create_playlist">
          <img src={createPlaylist} alt="" />
          <p>Create Playlist</p>
        </div>
        <div className="create_playlist" onClick={() => nav("/like")}>
          <img src={likedsong} alt="" />
          <p className={acitive2}>Liked Song</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="dashbord_music_names">
        <ul>
          <li>Chill Mix</li>
          <li>Insta Hits</li>
          <li>Your Top Songs 2021</li>
          <li>Mellow Songs</li>
          <li>Anime Lofi & Chillhop Music</li>
          <li>BG Afro “Select” Vibes</li>
          <li>Afro “Select” Vibes</li>
          <li>Happy Hits!</li>
          <li>Deep Focus</li>
          <li>Instrumental Study</li>
          <li>OST Compilations</li>
          <li>Nostalgia for old souled mill...</li>
          <li>Mixed Feelings</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLeft;
