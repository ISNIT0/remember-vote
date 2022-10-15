import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const Screen1 = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const exitLeft = interpolate(frame - 50, [0, 10], [0, -width]);
  const exitTop = interpolate(frame - 50, [0, 10], [0, -width]);
  const exitRotate = interpolate(frame - 50, [0, 10], [0, -200]);

  return (
    <div
      style={{
        flex: 1,
        textAlign: "left",
        fontSize: "6em",
        fontFamily: "Futura",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontStyle: "italic",
        transform: `translateY(${frame > 50 ? exitTop : 0}px)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          transform: `scale(${scale}) rotate(${
            frame > 50 ? exitRotate : 0
          }deg)`,
          marginLeft: "50px",
          left: frame > 50 ? exitLeft : 0,
        }}
      >
        Why
        <br />
        Vote?
      </div>
    </div>
  );
};
