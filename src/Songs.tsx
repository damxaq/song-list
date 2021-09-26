import { useState, useEffect } from "react";

import SingleSong from "./SingleSong";
import Player from "./Player";

const Songs = () => {
  const [songsList, setSongsList] = useState<any[]>([]);
  const [playedSong, setPlayedSong] = useState(null);

  const fetchSongs = () => {
    fetch(`https://api-stg.jam-community.com/song/trending`)
      .then((res) => res.json())
      .then((res) => {
        const songs = res.map(
          (song: { name: string; cover_image_path: string; id: string }) => {
            return {
              name: song.name,
              image: song.cover_image_path,
              id: song.id,
            };
          }
        );
        setSongsList(songs);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      {songsList ? (
        <div
          className={
            playedSong ? "songs-container player-active" : "songs-container"
          }
        >
          {songsList.map(({ id, name, image }) => {
            return (
              <SingleSong
                key={id}
                name={name}
                image={image}
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
