import classNames from "classnames";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  vertical?: boolean;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function SliderItem({
  children,
  vertical,
  pauseOnHover,
  reverse,
}: Props) {
  return (
    <div
      className={classNames(
        "flex shrink-0 items-center justify-around",
        vertical ? "flex-col" : "flex-row",
        vertical ? "animate-marquee-vertical" : "animate-marquee",
        pauseOnHover && "group-hover:[animation-play-state:paused]",
        reverse && "marquee-reverse"
      )}
      style={{
        gap: "var(--gap)",
      }}
    >
      {children}
    </div>
  );
}
