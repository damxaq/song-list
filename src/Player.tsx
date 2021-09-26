import React from "react";

interface Props {
  song: any;
}

const Player = ({ song }: Props) => {
  return (
    <div className="player">
      <p className="player-title">{song.name}</p>
    </div>
  );
};

export default Player;
