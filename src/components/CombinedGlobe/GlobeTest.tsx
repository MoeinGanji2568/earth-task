import { useViewportWidth } from "@/hooks/useViewportWidth";
import { useSectionStore } from "@/store/useSectionStore";
import TradeDynamicList from "@/view/home/components/live-trades/_components/TradeDynamicList";
import { motion, useMotionValueEvent } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { GlobeCanvas } from "./GlobeCanvas";
import { GlobeRing } from "./GlobeRing";
import {
  GlobeContainerStyle,
  useGlobeConfig,
} from "../../hooks/globe/useGlobeConfig";
import useGlobeEvents from "../../hooks/globe/useGlobeEvents";
import { useGlobeInstance } from "../../hooks/globe/useGlobeInstance";
import { useGlobeMotion } from "../../hooks/globe/useGlobeMotion";

export function GlobeTest() {
  const [showTradeList, setShowTradeList] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const globeRef = useRef<HTMLDivElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const viewportWidth = useViewportWidth();
  const isMobile = viewportWidth < 768;

  const sections = useSectionStore((state) => state.sections);
  const sectionData = useMemo(() => {
    const trusted = sections.find((s) => s.id === "trusted-section");
    const opportunities = sections.find(
      (s) => s.id === "opportunities-section"
    );
    const section = trusted
      ? {
          top: trusted.top + 800,
          bottom: trusted.bottom + 1200,
        }
      : {
          top: 2000,
          bottom: 2500,
        };
    return { section, trusted, opportunities };
  }, [sections]);

  const config = useGlobeConfig(sectionData, isMobile, viewportWidth, globeRef);

  const markers = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      location: [Math.random() * 180 - 90, Math.random() * 360 - 180] as [
        number,
        number
      ],
      size: 0.1,
      color: [Math.random(), Math.random(), Math.random()] as [
        number,
        number,
        number
      ],
    }));
  }, []);

  const { top, left, scale, opacity, tradeListVisible } = useGlobeMotion(
    config,
    sectionData,
    isMobile
  );

  useMotionValueEvent(tradeListVisible, "change", (latest) => {
    setShowTradeList(latest);
  });

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));

  useGlobeInstance({
    canvasRef,
    markers,
    r,
    pointerInteracting,
  });

  const {
    handlePointerDown,
    handlePointerUp,
    handlePointerOut,
    handleMouseMove,
    handleTouchMove,
  } = useGlobeEvents(
    pointerInteracting,
    pointerInteractionMovement,
    canvasRef,
    api
  );

  return (
    <motion.div
      ref={globeRef}
      style={{ ...GlobeContainerStyle, top, left, scale, opacity }}
    >
      {showTradeList && (
        <motion.div
          key="trade-list"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <TradeDynamicList />
        </motion.div>
      )}

      <GlobeRing />
      <GlobeCanvas
        canvasRef={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </motion.div>
  );
}
