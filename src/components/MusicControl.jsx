import React from "react";
import ReactPlayer from "react-player";
import "../scss/music_control.scss"

function MusicControl({ playingTrack, isPlaying }) {
  return (
    <div className="music_control">
      <ReactPlayer
        url={playingTrack}
        controls
        playing={isPlaying}
        volume={0.6}
        width="500px"
        height="40px"
        className="react_player"
        style={{
          display: "inline-block",
          color: "black",
          backgroundColor:"black",
        }}
      />
    </div>
  );
}

export default MusicControl;
