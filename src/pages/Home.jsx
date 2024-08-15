import React, { useEffect, useState } from "react";
import { FetchZustand } from "../app/FetchZustand";
import "../scss/Home.scss";
import { back, prev } from "../assets/imgs";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  const {
    accessToken,
    playlists,
    topMiks,
    getToken,
    getPlaylists,
    getTopMiks,
    Madeforyou,
    getMadeforyou,
    Recentlyplayed,
    getRecentlyplayed,
    Uniquellyyours,
    getUniquellyyours,
    Jumpbackin,
    getJumpbackin,
    getPlaylistDetelis,
  } = FetchZustand();

  const toPlaylist = async (playlistId) => {
    await getPlaylistDetelis(playlistId);
    nav(`/playlist`);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getToken();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getPlaylists();
      getTopMiks();
      getMadeforyou();
      getRecentlyplayed();
      getUniquellyyours();
      getJumpbackin();
    }
  }, [accessToken]);

  console.log(playlists);
  console.log(Jumpbackin);

  return (
    <div className="homepage">
      <div className="header">
        <div className="bg-gradient">
          <div className="actions">
            <div className="imgs">
              <img src={back} alt="" />
              <img onClick={() => nav(+1)} src={prev} alt="" />
            </div>
            <h2 className="title">Good afternoon</h2>
          </div>
          <div className="home_playlist">
            <div className="playlists">
              {playlists.map((playlist) => (
                <div
                  onClick={() => toPlaylist(playlist.id)}
                  className="playlist"
                  key={playlist.id}
                >
                  <img
                    className="playlist_img"
                    src={playlist.images[0].url}
                    alt=""
                  />
                  <h4>{playlist.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="you_top_mixes">
            <h2>Your top mixes</h2>
            <div className="topmix">
              {topMiks.length &&
                topMiks.map((mix) => (
                  <div
                    onClick={() => toPlaylist(mix.id)}
                    className="mix"
                    key={mix.id}
                  >
                    <img className="mix_img" src={mix.images[0].url} alt="" />
                    <h4 className="mix_name">{mix.name}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="you_top_mixes">
            <h2>Made for you</h2>
            <div className="topmix">
              {Madeforyou.length &&
                Madeforyou.map((mix) => (
                  <div
                    onClick={() => toPlaylist(mix.id)}
                    className="mix"
                    key={mix.id}
                  >
                    <img className="mix_img" src={mix.images[0].url} alt="" />
                    <h4 className="mix_name">{mix.name}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="you_top_mixes">
            <h2>Recently played</h2>
            <div className="topmix">
              {Recentlyplayed.length &&
                Recentlyplayed.map((mix) => (
                  <div
                    onClick={() => toPlaylist(mix.id)}
                    className="mix"
                    key={mix.id}
                  >
                    <img className="mix_img" src={mix.images[0].url} alt="" />
                    <h4 className="mix_name">{mix.name}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="you_top_mixes">
            <h2>Jump back in</h2>
            <div className="topmix">
              {Jumpbackin.length &&
                Jumpbackin.map((mix) => (
                  <div
                    onClick={() => toPlaylist(mix.id)}
                    className="mix"
                    key={mix.id}
                  >
                    <img className="mix_img" src={mix.images[0].url} alt="" />
                    <h4 className="mix_name">{mix.name}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="you_top_mixes">
            <h2>Uniquely yours</h2>
            <div className="topmix">
              {Uniquellyyours.length &&
                Uniquellyyours.map((mix) => (
                  <div
                    onClick={() => toPlaylist(mix.id)}
                    className="mix"
                    key={mix.id}
                  >
                    <img className="mix_img" src={mix.images[0].url} alt="" />
                    <h4 className="mix_name">{mix.name}</h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
