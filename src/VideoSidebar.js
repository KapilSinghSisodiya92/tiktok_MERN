import React, { useState } from "react";
import "./VideoSidebar.css";
import FavIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setliked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavBorderIcon fontSize="large" onClick={(e) => setliked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
