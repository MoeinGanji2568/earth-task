"use client";
import { useSectionStore } from "@/store/useSectionStore";
import { Typography } from "@/ui/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import space from "public/space.jpg";
import { useCallback, useEffect, useRef } from "react";
import CountUp from "react-countup";
import TradeStatisticsList from "./_components/TradeStatisticsList";

export const LiveTradeSection = () => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const setSectionPosition = useSectionStore(
    (state) => state.setSectionPosition
  );

  const trustedSectionRef = useSectionStore((state) =>
    state.getSectionById("trusted-section")
  );

  const handleScroll = useCallback(() => {
    if (scrollAreaRef.current) {
      const INITIAL_TOP = 250;
      const rect = scrollAreaRef.current.getBoundingClientRect();
      const top = rect.top - INITIAL_TOP;
      const bottom = rect.bottom;

      setSectionPosition({
        id: "live-trades",
        top,
        bottom,
      });
    }
  }, [setSectionPosition]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  const { scrollYProgress: scrollAreaProgress } = useScroll({
    offset: ["start start", "end 10%"],
    target: trustedSectionRef?.ref || undefined,
  });

  const LiveTradeSectionTranslateY = useTransform(
    scrollAreaProgress,
    [0, 0.7, 0.8],
    ["800px", "800px", "0px"]
  );

  return (
    <motion.div
      className="relative w-full h-[700px]  overflow-hidden z-20"
      ref={scrollAreaRef}
      style={{
        backgroundImage: `url(${space.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: LiveTradeSectionTranslateY,
      }}
    >
      <div
        className="mt-[100px] lg:mt-[200px] flex flex-col justify-center md:justify-start items-center xl:items-start
       px-18 gap-8 text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        <Typography
          variant="h2"
          className=" text-[#7570FF] text-center md:text-left"
        >
          LIVE TRADES
          <span className="text-white block">ON TECHNANCE</span>
        </Typography>
        <div className="flex items-center gap-4">
          <span className="rounded-full size-7 lg:size-12 flex items-center justify-center bg-gradient-to-r from-black/20 to-white/20">
            <span className="rounded-full size-4 lg:size-6 bg-white"></span>
          </span>
          <motion.span
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            className="text-3xl lg:text-6xl"
          >
            <CountUp end={3267634} duration={3.5} />
          </motion.span>
        </div>
        <TradeStatisticsList />
      </div>
    </motion.div>
  );
};
