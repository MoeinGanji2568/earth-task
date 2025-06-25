import classNames from "classnames";
import { times } from "lodash";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { SliderItem } from "./SliderItem";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function IntervalSlider({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={classNames(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={
        {
          "--gap": gap,
          "--duration": duration,
          "--marquee-direction": reverse ? "reverse" : "normal",
          gap: "var(--gap)",
        } as CSSProperties
      }
    >
      {times(repeat, (index: number) => (
        <SliderItem
          key={index}
          pauseOnHover={pauseOnHover}
          reverse={reverse}
          vertical={vertical}
        >
          {children}
        </SliderItem>
      ))}
    </div>
  );
}
