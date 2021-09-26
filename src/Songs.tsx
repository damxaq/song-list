import React, { useState, useEffect } from "react";

import SingleSong from "./SingleSong";

const Songs = () => {
  const [songsList, setSongsList] = useState<any[]>([]);

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
        <div className="songs-container">
          {songsList.map(({ id, name, image }) => {
            return <SingleSong key={id} name={name} image={image} />;
          })}
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default Songs;
