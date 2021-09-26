import axios from "axios";
import requests from "./requests";
import { SongResponse } from "./../models/song";

export const fetchSongList = async () => {
  return axios
    .get(requests.fetchSongsList)
    .then((response) => {
      console.log(response);
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
