import { useEffect } from "react";
import { useMotionValue, useTransform } from "motion/react";
import type { GlobeConfig } from "../../components/CombinedGlobe/types";

interface SectionData {
  section?: { top: number; bottom: number };
  trusted?: { top: number; bottom: number };
  opportunities?: { top: number; bottom: number };
}

export function useGlobeMotion(
  config: GlobeConfig,
  sectionData: SectionData,
  isMobile: boolean
) {
  const rawTop = useMotionValue(0);
  const rawLeftPct = useMotionValue(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { trusted, section } = sectionData;
          const progress = scrollY - (trusted?.top ?? 0);
          const totalDistance = (section?.bottom ?? 1) - (trusted?.top ?? 0);
          const proportion =
            totalDistance > 0 ? (progress / totalDistance) * 600 : 0;
          rawTop.set(scrollY);
          rawLeftPct.set(proportion);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionData, rawTop, rawLeftPct]);

  const left = useTransform(isMobile ? rawLeftPct : rawTop, (s: number) => {
    if (isMobile) return `${config.initialLeftPct}%`;
    if (s <= config.startMoveScroll) return `${config.initialLeftPct}%`;
    if (s >= config.endScroll) return `${config.finalLeftPct}%`;
    const prog =
      (s - config.startMoveScroll) /
      (config.endScroll - config.startMoveScroll);
    return `${
      config.initialLeftPct +
      prog * (config.finalLeftPct - config.initialLeftPct)
    }%`;
  });

  const top = useTransform(rawTop, (s: number) => {
    if (s <= config.startMoveScroll) return config.initialTopPx;
    if (s >= config.endScroll) return config.finalTopPx;
    const prog =
      (s - config.startMoveScroll) /
      (config.endScroll - config.startMoveScroll);
    return (
      config.initialTopPx + prog * (config.finalTopPx - config.initialTopPx)
    );
  });

  const scale = useTransform(rawTop, (s: number) => {
    const { trusted, opportunities } = sectionData;
    const sectionTop = sectionData.section?.top ?? 1722;
    const scaleAfterScroll = 200;
    const oppTop = opportunities?.top ?? 0;
    const trustedTop = trusted?.top ?? 0;
    if (s > sectionTop) {
      return 1 + Math.min((s - sectionTop) / scaleAfterScroll, 1) * 0.07;
    }
    if (s < oppTop) return 0.8;
    if (s <= trustedTop) {
      return 0.8 + ((s - oppTop) / (trustedTop - oppTop)) * 0.2;
    }
    return 1;
  });

  const opacity = useTransform(rawTop, (s: number) => {
    const { trusted, opportunities } = sectionData;
    const start = opportunities?.top ?? 0;
    const end = trusted?.top ?? 0;
    if (s < start) return 0;
    if (s > end) return 1;
    return (s - start) / (end - start);
  });

  // TradeDynamicList animation - appears at 90% of scroll progress
  const tradeListVisible = useTransform(rawTop, (s: number) => {
    // Use the globe's own animation range instead of section positions
    const start = config.startMoveScroll;
    const end = config.endScroll;
    const totalDistance = end - start;
    const triggerPoint = start + totalDistance * 0.9; // 90% of globe animation

    return s >= triggerPoint; // Return boolean - true when should be visible
  });

  return { top, left, scale, opacity, rawTop, rawLeftPct, tradeListVisible };
}
