import { useRef, Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  image: string;
  songPath: string;
  setPlayedSong: Dispatch<SetStateAction<any>>;
}

const SingleSong = ({ name, image, songPath, setPlayedSong }: Props) => {
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const handlePlaySong = () => {
    setPlayedSong(null);
    setPlayedSong({ name, image, songPath });
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
