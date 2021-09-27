import axios from "axios";
import requests from "./requests";
import { SongResponse } from "./../models/song";
const { REACT_APP_API_KEY } = process.env;

export const fetchSongList = async () => {
  return axios
    .get(requests.fetchSongsList)
    .then((response) => {
      const data = response.data;
      const songs = data.map((song: SongResponse) => {
        return {
          name: song.name,
          image: song.cover_image_path,
          id: song.id,
          songPath: "../placeholder.mp3",
        };
      });
      return songs;
    })
    .catch((err) => {
      console.log("Error getting songs", err);
    });
};

export const postLikeSong = (songId: string) => {
  if (songId) {
    const body = {
      id: songId,
    };

    var config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: { apikey: REACT_APP_API_KEY },
    };

    axios
      .post(requests.likeSong, body, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Error liking song", err);
      });
  }
};
