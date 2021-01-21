import React from "react";
import YouTube from "react-youtube";
function VideoPlayer({ trailer }) {
  console.log("url", trailer);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube videoId={trailer} opts={opts} />
    </div>
  );
}

export default VideoPlayer;
