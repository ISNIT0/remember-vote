import { spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { Screen3 } from "./Screen3";
import { ScrollScreen } from "./ScrollScreen";

export const WhyVoteVideo = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={60}>
        <Screen1 />
      </Sequence>
      <Sequence from={55} durationInFrames={195}>
        <Screen2 />
      </Sequence>
      <Sequence from={190} durationInFrames={330}>
        <Screen3 />
      </Sequence>
      <Sequence from={320} durationInFrames={360}>
        <ScrollScreen />
      </Sequence>
    </>
  );
};
