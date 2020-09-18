import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Seach twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1305884131834855439" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="the_hindu"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/akshit-soneji/"}
          options={{ text: "Check me out at ", via: "AkshitSoneji" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
