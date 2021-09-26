import { useState, useEffect } from "react";

import SingleSong from "./SingleSong";
import Player from "./Player";
import { fetchSongList } from "./axiosApi";

const Songs = () => {
  const [songsList, setSongsList] = useState<any[]>([]);
  const [playedSong, setPlayedSong] = useState(null);

  useEffect(() => {
    fetchSongList().then((res) => {
      setSongsList(res);
    });
  }, []);

  return (
    <div>
      {songsList ? (
        <div
          className={
            playedSong ? "songs-container player-active" : "songs-container"
          }
        >
          {songsList.map(({ id, name, image, songPath }) => {
            return (
              <SingleSong
                key={id}
                name={name}
                image={image}
                songPath={songPath}
                setPlayedSong={setPlayedSong}
              />
            );
          })}
        </div>
      ) : (
        <>Loading</>
      )}
      {playedSong && <Player song={playedSong} setPlayedSong={setPlayedSong} />}
    </div>
  );
};

export default Songs;
