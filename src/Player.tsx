import { Dispatch, SetStateAction } from "react";
import ReactAudioPlayer from "react-audio-player";

interface Props {
  song: any;
  setPlayedSong: Dispatch<SetStateAction<any>>;
}

const Player = ({ song, setPlayedSong }: Props) => {
  const handleClose = () => {
    setPlayedSong(null);
  };

  return (
    <div className="player">
      <p className="player-title">{song.name}</p>
      <ReactAudioPlayer src="../placeholder.mp3" autoPlay controls />
      <span id="close-button" onClick={handleClose}>
        X
      </span>
    </div>
  );
};

export default Player;
