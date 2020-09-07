import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video_player"
        src={url}
      ></video>
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        shares={shares}
        messages={messages}
      />
    </div>
  );
}

export default Video;
