export const SONGS_BASE_URL = "https://api-stg.jam-community.com";

const requests = {
  fetchSongsList: `${SONGS_BASE_URL}/song/trending`,
  likeSong: `${SONGS_BASE_URL}/interact/like`,
};

export default requests;
