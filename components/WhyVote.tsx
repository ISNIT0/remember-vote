import { Player, PlayerRef } from "@remotion/player";
import { useEffect, useState } from "react";
import { isBrowser } from "../util/isBrowser";
import { WhyVoteVideo } from "./WhyVoteVideo/WhyVoteVideo";

export const WhyVote = () => {
  const [playerRef, setPlayerRef] = useState<PlayerRef | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    if (isBrowser() && !showVideo) {
      setShowVideo(true);
    }
  }, []);

  useEffect(() => {
    if (playerRef) {
      playerRef.pause();
      playerRef.seekTo(350);
    }
  }, [playerRef]);

  return (
    <>
      <span className="sticky-header why-vote">
        <h1>WHY</h1>
      </span>
      <div id="why-vote" className="why-vote">
        {showVideo ? (
          <Player
            ref={(ref) => setPlayerRef(ref)}
            autoPlay
            component={WhyVoteVideo}
            durationInFrames={350}
            compositionWidth={window.innerWidth}
            compositionHeight={window.innerHeight}
            fps={30}
          />
        ) : null}
      </div>
    </>
  );
};
