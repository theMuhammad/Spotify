import { create } from "zustand";

const ClientId = "189619f31ca9490d969855b011f25c25";
const ClientSecret = "a7a2304118d34b2f99156ef3e538dd1f";
const tokenUrl = "https://accounts.spotify.com/api/token";
const apiUrl = "https://api.spotify.com/v1/browse/featured-playlists?limit=6";
const topMiks =
  "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=4";
const Madeforyou =
  "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists?limit=4";
const Recentlyplayed =
  "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=4";

const Jumpbackin =
  "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists?limit=4";

const Uniquellyyours =
  "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=4";

export const FetchZustand = create((set) => ({
  accessToken: null,
  loading: false,
  playlists: [],
  topMiks: [],
  Madeforyou: [],
  Recentlyplayed: [],
  Jumpbackin: [],
  Uniquellyyours: [],
  PlaylistDetelis: {},
  setAccessToken: (token) => set((state) => ({ ...state, accessToken: token })),
  setPlaylistDetelis: (playlist) =>
    set((state) => ({ ...state, PlaylistDetelis: playlist })),
  setPlaylists: (lists) => set((state) => ({ ...state, playlists: lists })),
  setTopMiks: (topMiks) => set((state) => ({ ...state, topMiks: topMiks })),
  setRecentlyplayed: (Recentlyplayed) =>
    set((state) => ({ ...state, recentlyplayed: Recentlyplayed })),
  setMadeforyou: (Madeforyou) =>
    set((state) => ({ ...state, Madeforyou: Madeforyou })),
  setLoading: (loading) => set({ isLoading: loading }),

  getToken: async () => {
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(ClientId + ":" + ClientSecret)}`,
        },
        body: "grant_type=client_credentials",
      });
      const data = await response.json();
      const accessToken = data.access_token;
      localStorage.setItem("spotify_access_token", accessToken);
      set({ accessToken: accessToken });
    } catch (error) {
      console.log(error);
    }
  },
  getPlaylists: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ playlists: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getTopMiks: async () => {
    try {
      const response = await fetch(topMiks, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ topMiks: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getMadeforyou: async () => {
    try {
      const response = await fetch(Madeforyou, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ Madeforyou: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getRecentlyplayed: async () => {
    try {
      const response = await fetch(Recentlyplayed, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ Recentlyplayed: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getJumpbackin: async () => {
    try {
      const response = await fetch(Jumpbackin, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ Jumpbackin: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getUniquellyyours: async () => {
    try {
      const response = await fetch(Uniquellyyours, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
      });
      const data = await response.json();
      set({ Uniquellyyours: data.playlists.items });
    } catch (error) {
      console.log(error);
    }
  },
  getPlaylistDetelis: async (playlistId) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "spotify_access_token"
            )}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      set({ PlaylistDetelis: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  likedsong: (track) => {
    try {
      const likedSongs = JSON.parse(localStorage.getItem("liked_songs")) || [];
      const isLiked = likedSongs.some(
        (likedTrack) => likedTrack.id === track.id
      );
      if (!isLiked) {
        likedSongs.push(track);
        localStorage.setItem("liked_songs", JSON.stringify(likedSongs));
      }
    } catch (error) {
      console.error("Error adding liked song to localStorage:", error);
    } 
  },
}));
