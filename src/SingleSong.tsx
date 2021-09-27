import { useRef, Dispatch, SetStateAction } from "react";
import { Song } from "./models/song";

interface Props {
  song: Song;
  setPlayedSong: Dispatch<SetStateAction<any>>;
}

const SingleSong = ({ song, setPlayedSong }: Props) => {
  const { name, image } = song;
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const handlePlaySong = () => {
    setPlayedSong(null);
    setPlayedSong(song);
  };

  return (
    <div className="single-song">
      <img
        src={image}
        alt={name}
        onMouseOver={() => playButtonRef.current?.classList.add("active")}
        onMouseLeave={() => playButtonRef.current?.classList.remove("active")}
        onClick={handlePlaySong}
      />
      <button className="play-button" ref={playButtonRef}></button>
      <p>{name}</p>
    </div>
  );
};

export default SingleSong;
