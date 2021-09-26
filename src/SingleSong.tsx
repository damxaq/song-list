import { useRef } from "react";

interface Props {
  name: string;
  image: string;
}

const SingleSong = ({ name, image }: Props) => {
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {};

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
