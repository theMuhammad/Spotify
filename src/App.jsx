import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistDetelis from "./pages/PlaylistDetelis";
import Like from "./pages/Like";
import DashboardLeft from "./components/DashboardLeft";
import DashboardRight from "./components/DashboardRight";
import MusicControl from "./components/MusicControl";
import "./scss/app.scss";

function App() {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Router>
        <div className="app">
          <DashboardLeft />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/playlist"
              element={
                <PlaylistDetelis
                  playingTrack={playingTrack}
                  isPlaying={isPlaying}
                  setPlayingTrack={setPlayingTrack}
                  setIsPlaying={setIsPlaying}
                />
              }
            />
            <Route
              path="/like"
              element={
                <Like
                  playingTrack={playingTrack}
                  isPlaying={isPlaying}
                  setPlayingTrack={setPlayingTrack}
                  setIsPlaying={setIsPlaying}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <DashboardRight />
        </div>
        <MusicControl playingTrack={playingTrack} isPlaying={isPlaying} />
      </Router>
    </div>
  );
}

export default App;
