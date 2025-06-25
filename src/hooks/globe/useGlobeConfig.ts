import { useMemo, useRef, useLayoutEffect } from "react";
import type { GlobeConfig } from "../../components/CombinedGlobe/types";
import { MotionStyle } from "motion/react";

export function useGlobeConfig(
  sectionData: {
    section?: { top: number; bottom: number };
    trusted?: { top: number };
    opportunities?: { bottom: number; top: number };
  },
  isMobile: boolean,
  viewportWidth: number,
  globeRef: React.RefObject<HTMLDivElement | null>
) {
  const initialLeftPctRef = useRef(25);

  // Center globe horizontally on mount and resize
  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!globeRef.current) return;
      const globeWidth = globeRef.current.offsetWidth;
      const leftPx = (viewportWidth - globeWidth) / 2;
      initialLeftPctRef.current = (leftPx / viewportWidth) * 100;
    };
    updatePosition();
  }, [viewportWidth, globeRef]);

  return useMemo<GlobeConfig>(() => {
    const { trusted, opportunities, section } = sectionData;
    const offset = isMobile ? 80 : 55;
    const initialTopPx = (opportunities?.bottom ?? 600) / 3;
    const finalLeftPct = isMobile ? 50 : 55;
    const startMoveScroll = isMobile
      ? trusted?.top ?? 1640
      : initialTopPx + (trusted?.top ?? 765) - offset;
    const endScroll = section?.top ?? startMoveScroll + 800;
    const finalTopPx = isMobile ? 1080 : 1200;
    return {
      initialTopPx,
      initialLeftPct: initialLeftPctRef.current,
      finalLeftPct,
      finalTopPx,
      startMoveScroll,
      endScroll,
      offset,
    };
  }, [sectionData, isMobile]);
}

export const GlobeContainerStyle: MotionStyle = {
  position: "absolute",
  width: "100%",
  maxWidth: 850,
  aspectRatio: "1",
  margin: "auto",
  zIndex: 50,
  transitionDelay: "0.4s",
  transition: "all 0.3s ease",
};
