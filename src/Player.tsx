import { useState, Dispatch, SetStateAction } from "react";
import ReactAudioPlayer from "react-audio-player";
import { postLikeSong } from "./utils/axiosApi";
import { Song } from "./models/song";

interface Props {
  song: Song;
  setPlayedSong: Dispatch<SetStateAction<any>>;
}

const Player = ({ song, setPlayedSong }: Props) => {
  const [liked, setliked] = useState(false);

  const handleClose = () => {
    setPlayedSong(null);
  };

  const handleLike = () => {
    setliked(true);
    postLikeSong(song.id);
  };

  return (
    <div className="player">
      <p className="player-title">{song.name}</p>
      <div className="player-controls">
        <ReactAudioPlayer src={song.songPath} autoPlay controls />
        <div className={`heart ${liked ? "active" : ""}`} onClick={handleLike}>
          ❤
        </div>
      </div>
      <div id="close-button" onClick={handleClose}>
        X
      </div>
    </div>
  );
};

export default Player;
