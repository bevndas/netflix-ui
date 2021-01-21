import React from "react";

function VideoPlayer({ trailerUrl }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
  );
}

export default VideoPlayer;
