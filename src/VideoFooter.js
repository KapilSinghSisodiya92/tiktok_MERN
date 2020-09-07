import React from "react";
import "./VideoFooter.css";
import MusicIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import VideoSidebar from "./VideoSidebar";

function VideoFooter({ channel, description, song, likes, shares, messages }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicIcon className="videoFooter__icon" />
          <Ticker mode="smooth">{({ index }) => <>{song}</>}</Ticker>
        </div>
      </div>
      <img
        src="http://static.thenounproject.com/png/934821-200.png"
        className="videoFooter__record"
        alt=""
      />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default VideoFooter;
