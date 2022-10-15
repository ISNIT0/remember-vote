import debounce from "lodash/debounce";
import { UIEvent, useMemo } from "react";
import { ampli } from "../src/ampli";

export const TikTokFrame = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const onScrollDebounced = useMemo(() => {
    return debounce((ev: UIEvent<HTMLDivElement>) => {
      const target = ev.target as HTMLElement | null;
      const activeIndex = target
        ? Math.round(target.scrollTop / target.clientHeight)
        : 0;
      const activeElement = target?.children[activeIndex];
      const activeElementId = activeElement?.id;
      ampli.screenViewed({ screenId: activeElementId || "unknown" });
    }, 100);
  }, []);

  return (
    <div className="tiktok-frame" onScroll={onScrollDebounced}>
      {props.children}
    </div>
  );
};
