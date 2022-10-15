import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const Screen3 = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const enterTop =
    frame < 30
      ? spring({ fps, frame, from: -height, to: 0, durationInFrames: 30 })
      : 0;
  const enterOpacity = frame < 50 ? interpolate(frame, [0, 50], [0, 1]) : 1;
  const exitScale =
    frame > 130
      ? spring({
          fps,
          frame: frame - 130,
          from: 1,
          to: 25,
          durationInFrames: 10,
        })
      : 1;
  const exitOpacity =
    frame > 130 ? interpolate(frame - 130, [0, 10], [1, 0]) : 1;

  return (
    <div
      style={{
        flex: 1,
        textAlign: "left",
        fontSize: "44px",
        fontFamily: "Futura",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontStyle: "italic",
        position: "absolute",
        top: enterTop,
        height: "100%",
        width: width - 60,
      }}
    >
      <div
        style={{
          transform: `scale(${exitScale})`,
          marginLeft: "50px",
          width: "100%",
          opacity: frame < 130 ? enterOpacity : exitOpacity,
        }}
      >
        ...Bible Verse Goes Here...
      </div>
    </div>
  );
};
