import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const Screen2 = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const enterLeft =
    frame < 30
      ? spring({ fps, frame, from: width, to: 0, durationInFrames: 30 })
      : 0;
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
        left: enterLeft,
        top: 0,
        height: "100%",
        width: width - 60,
      }}
    >
      <div
        style={{
          transform: `scale(${exitScale})`,
          marginLeft: "50px",
          width: "100%",
          opacity: exitOpacity,
        }}
      >
        “God has called his people to be light and salt in every area of
        society, including politics.”
      </div>
    </div>
  );
};
