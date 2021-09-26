import { useRef, Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  image: string;
  setPlayedSong: Dispatch<SetStateAction<any>>;
}

const SingleSong = ({ name, image, setPlayedSong }: Props) => {
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setPlayedSong({ name, image });
  };

  return (
    <div className="single-song">
      <img
        src={image}
        alt={name}
        onMouseOver={() => playButtonRef.current?.classList.add("active")}
        onMouseLeave={() => playButtonRef.current?.classList.remove("active")}
        onClick={handleClick}
      />
      <button className="play-button" ref={playButtonRef}></button>
      <p>{name}</p>
    </div>
  );
};

export default SingleSong;
