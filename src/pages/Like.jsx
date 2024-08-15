import React, { useEffect, useState } from "react";
import "../scss/Like.scss";
import { useNavigate } from "react-router-dom";
import {
  back,
  clock,
  dowload,
  like_playlist,
  likedsong,
  others,
  play,
  play_music,
  prev,
  pusk,
} from "../assets/imgs";

function Like({ playingTrack, setPlayingTrack, isPlaying, setIsPlaying }) {
  const nav = useNavigate();
  const [likedSongs, setLikedSongs] = useState(
    JSON.parse(localStorage.getItem("liked_songs")) || []
  );

  useEffect(() => {
    setIsPlaying(true);
  }, [playingTrack]);

  const play_musiqa = (track) => {
    setPlayingTrack(track);
    setIsPlaying(!isPlaying);
    console.log(track);
  };

  const TruncateText = ({ text = "Text not provided", maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return <span>{truncatedText}</span>;
  };

  const formatDuration = (duration_ms) => {
    const totalSeconds = Math.floor(duration_ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const unlikeSong = (track) => {
    try {
      const updatedLikedSongs = likedSongs.filter(
        (likedSong) => likedSong.id !== track.id
      );
      localStorage.setItem("liked_songs", JSON.stringify(updatedLikedSongs));
      setLikedSongs(updatedLikedSongs);
    } catch (error) {
      console.error("Error removing liked song from localStorage:", error);
    }
  };

  return (
    <div className="like_detelis">
      <div className="actions_playlist">
        <div className="imgs">
          <img onClick={() => nav(-1)} src={back} alt="" />
          <img src={prev} alt="" />
        </div>
      </div>
      <div className="playlist_info">
        <div className="playlist_img">
          <img src={likedsong} alt="" />
        </div>
        <div className="playlist_text">
          <p className="public">PUBLIC PLAYLIST</p>
          <h1>Liked Songs</h1>
          <p className="dec">Made for davedirect3 . 34 songs, 2hr 01 min</p>
        </div>
      </div>
      <div className="bg-black">
        <div className="music_actions">
          <div className="actions_m">
            <img src={play} alt="" />
            <img src={like_playlist} alt="" />
            <img src={dowload} alt="" />
            <img src={others} alt="" />
          </div>
          <div className="pusk">
            <img src={pusk} alt="" />
          </div>
        </div>
        <div className="tracks">
          <table>
            <thead>
              <tr>
                <td className="index">#</td>
                <td className="name">TITLE</td>
                <td className="albom_name">ALBUM</td>
                <td className="like_td"></td>
                <td className="reels">DATA ADDED</td>
                <td className="duration_ms">
                  <img src={clock} alt="" />
                </td>
              </tr>
            </thead>
            <tbody>
              {likedSongs.length > 0 &&
                likedSongs.map((item, index) => (
                  <tr className="tr" key={index}>
                    <td className="index">
                      <span className="wrapper">
                        <span className="box1">{index + 1}</span>
                        <span className="box2">
                          <img
                            onClick={() => play_musiqa(item.preview_url)}
                            src={play_music}
                            alt=""
                          />
                        </span>
                      </span>
                    </td>
                    <td className="name">
                      <img src={item.album.images[0].url} alt="" />
                      <span>
                        <TruncateText text={item.track.name} maxLength={15} />
                        <br></br>
                        <span className="art_name">
                          {item.album.artists[0].name}
                        </span>
                      </span>
                    </td>
                    <td className="albom_name">
                      <TruncateText text={item.album.name} maxLength={8} />
                    </td>
                    <td className="like_td" onClick={() => unlikeSong(item)}>
                      Unlike
                    </td>
                    <td className="reels">{item.album.release_date}</td>
                    <td className="duration_ms">
                      {formatDuration(item.duration_ms)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Like;
