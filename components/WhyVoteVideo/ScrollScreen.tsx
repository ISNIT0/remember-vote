import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const ScrollScreen = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "28px",
        fontFamily: "Futura",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontStyle: "italic",
      }}
    >
      <div
        style={{
          position: "absolute",
          transform: `scale(${scale})`,
          textAlign: "center",
          width: "100%",
        }}
      >
        Scroll to learn how to vote
        <br />
        <span style={{ fontSize: "2em" }}>👇</span>
      </div>
    </div>
  );
};
