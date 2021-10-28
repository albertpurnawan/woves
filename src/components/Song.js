import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img data-testid="cover" alt={currentSong.name} src={currentSong.cover} />
      <h2 data-testid="song-name">{currentSong.name}</h2>
      <h3 data-testid="artist-name">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
