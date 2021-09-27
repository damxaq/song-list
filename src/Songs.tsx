import { useState, useEffect } from "react";

import SingleSong from "./SingleSong";
import Player from "./Player";
import { fetchSongList } from "./utils/axiosApi";
import { Song } from "./models/song";

const Songs = () => {
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [playedSong, setPlayedSong] = useState(null);

  useEffect(() => {
    fetchSongList().then((res) => {
      setSongsList(res);
    });
  }, []);

  return (
    <div>
      {songsList ? (
        <div className={`songs-container ${playedSong ? "player-active" : ""}`}>
          {songsList.map((song) => {
            return (
              <SingleSong
                key={song.id}
                song={song}
                setPlayedSong={setPlayedSong}
              />
            );
          })}
        </div>
      ) : (
        <>Loading</>
      )}
      {playedSong && (
        <Player
          key={new Date().getTime()} // way to reset component after changing song
          song={playedSong}
          setPlayedSong={setPlayedSong}
        />
      )}
    </div>
  );
};

export default Songs;
